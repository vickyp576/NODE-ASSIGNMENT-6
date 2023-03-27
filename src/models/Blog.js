const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema(
    {
        topic: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        posted_at: {
            type: String,
            required: true
        },
        posted_by: {
            type: String,
            required: true
        }
    })


const Blog = mongoose.model('blogs', blogSchema)
module.exports= Blog;