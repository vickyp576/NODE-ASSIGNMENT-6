const express = require('express')
const mongoose = require('mongoose')
const { Schema } = require('mongoose')
const router = express.Router()
const Blog = require('../models/Blog')

//get data 
router.get('/blog',(req,res)=>{
    const {page,search} = req.query;
    Blog.find((err, foundBlog)=>{
        if(err) console.log(err);
        else{
            res.send({
                status:"Sucess",
                result: foundBlog
            })
        }
    })
})

router.post('/blog',(req,res)=>{
    const {topic, description, posted_at, posted_by} = req.body;
    Blog.create({
        topic: topic,
        description: description,
        posted_at: posted_at,
        posted_by: posted_by
    },(err, newBlog)=>{
        if(err) console.log(err)
        else{
            newBlog.save();
            res.json({status: 'Success',
            result: newBlog
        })
        }
    })

})

router.put('/blog/:topic', (req,res)=>{
    const {description, posted_at, posted_by} = req.body;
    Blog.findOneAndUpdate({topic: req.params.topic},
        {
            description: description,
            posted_at: posted_at,
            posted_by: posted_by
        },{returnOriginal:false},(err,updBlog)=>{
            if(err) console.log(err);
        else{
            res.send({
                status:"Sucess",
                result: updBlog
            })}})
        
})

router.delete('/blog/:topic',(req,res)=>{
    const {topic} = req.params
    Blog.findByIdAndDelete({topic:topic},(err,deleteBlog)=>{
        if(err) console.log(err)
        else{
            res.send({
                status:"Sucess",
                result: deleteBlog
            })
        }
    })
})

module.exports = router  