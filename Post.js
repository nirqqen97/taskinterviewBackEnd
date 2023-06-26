import mongoose from 'mongoose'

const Post = mongoose.Schema( { 
    author : {type : String, required : true},
    description : {type : String, required : true},
    platform : {type : String, required : true},
    upvote : {type : Number, },
    downvote : {type : Number, },
    picture : {type : String, required : true}
})

export default mongoose.model('Post',Post)