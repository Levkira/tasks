const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: 'User'
    }
},
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    });

PostSchema.virtual('likes', {
    ref: 'Likes',
    localField: '_id',
    foreignField: 'post',
    justOne: false
});

PostSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Post', PostSchema);