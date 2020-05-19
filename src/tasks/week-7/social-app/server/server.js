const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { ObjectId } = require('mongodb');
const { errorHandler, requireAuth } = require('./middlewares');
const bodyParser = require('body-parser');
const getDb = require('./db');
const PORT = 5000;

const app = express();

app.use(bodyParser.json());

app.use(errorHandler);

app.use(express.static(`${__dirname}/public`));

app.use(cors());

app.post('/signup', async (req, res) => {
    const newUser = req.body;
    const db = await getDb();
    const user = await db.collection('users').findOne({ email: newUser.email.toLowerCase() })
    if (user) {
        return res.sendHTTPError(400, 'User already exists')
    }
    newUser.email = newUser.email.toLowerCase();
    newUser.password = bcrypt.hashSync(newUser.password, 10)
    await db.collection('users').insertOne(newUser);
    res.send({ message: 'success' })
})

app.post('/auth', async (req, res) => {
    const { email, password } = req.body;
    const db = await getDb();
    const user = await db.collection('users').findOne({ email: email.toLowerCase() })
    if (!user) {
        return res.sendHTTPError(401, 'User does not exist')
    }
    bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
            delete user.password;
            const authToken = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' })
            res.send({ user, authToken });
        } else {
            res.sendHTTPError(401, 'Password is incorrect');
        }
    })
})

app.get('/api/users', requireAuth, async (req, res) => {
    const db = await getDb();
    const result = await db.collection('users').find({}).toArray()
    res.send(result);
})

app.get('/api/me', requireAuth, async (req, res) => {
    const db = await getDb();
    const user = await db.collection('users').findOne({ _id: ObjectId(req.userId) }, { fields: { password: false } })
    res.json(user)
})


app.get('/api/posts', async (req, res) => {
    const db = await getDb();
    const posts = await db.collection('posts').aggregate([
        { $lookup: 
            {
                from: 'comments',
                localField: '_id',
                foreignField: 'post_id',
                as: 'comments'
            }
        }
    ]).toArray();
    res.json(posts)
});

app.post('/api/posts', async (req, res) => {
    const { id, title, content, author_id } = req.body;
    const post = {
        _id: id,
        title: title,
        content: content,
        author_id: author_id
    };
    const db = await getDb();
    await db.collection('posts').insertOne(post);
    res.send(post);
});

app.delete('/api/posts', async (req, res) => {
    const db = await getDb();
    const post = await db.collection('posts').findOne({ _id: ObjectId(req.body._id) });
    if (!post) {
        return res.sendHTTPError(401, 'Post was not found');
    }
    await db.collection('posts').deleteOne({ _id: ObjectId(req.body._id) });
    res.send({ message: 'Post was deleted' })
});

app.get('/api/posts/:id', async (req, res) => {
    const db = await getDb();
    const post = await db.collection('posts').findOne({ _id: ObjectId(req.params.id) });
    res.send(post);
});

app.get('/api/comments', async (req, res) => {
    const db = await getDb();
    const comments = await db.collection('comments').aggregate([
        { $lookup: 
            {
                from: 'users',
                localField: 'author_id',
                foreignField: '_id',
                as: 'author'
            }
        }
    ]).toArray();
    res.send(comments);
});

app.post('/api/comments', async (req, res) => {
    const {id, title, text, post_id, author_id } = req.body;
    const comment = {
        _id: id,
        title: title,
        text: text,
        post_id: post_id,
        author_id: author_id
    };
    const db = await getDb();
    await db.collection('comments').insertOne(comment);
    res.send(comment);
});

app.delete('/api/comments', async (req, res) => {
    const db = await getDb();
    const comment = await db.collection('comments').findOne({ _id: req.body._id });
    if (!comment) {
        return res.sendHTTPError(401, 'Comment was not found');
    }
    await db.collection('comments').deleteOne({ _id: req.body._id });
    res.send({ message: 'Comment was deleted' })
});


app.get('/api/comments/:id', async (req, res) => {
    const db = await getDb();
    const comment = await db.collection('comments').findOne({ _id: ObjectId(req.params.id) });
    res.send(comment);
});

app.use((req, res, next) => {
    res.status(404).send({ message: 'Not Found' })
})

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message })
})

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`Server is running on ${PORT} port`)
})