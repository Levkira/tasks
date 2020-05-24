const mongoose = require('mongoose');

const LikesSchema = mongoose.Schema({
    author: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },
    post: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    }
});

module.exports = mongoose.model('Likes', LikesSchema);