import mongoose from 'mongoose'

const Post = mongoose.Schema( { 
    author : {type : String, required : true},
    description : {type : String, required : true},
    platform : {type : String, required : true,  enum: ['Twitch', 'YouTube', 'TikTok','Kick','Rumble']},
    upvote : {type : Number, default : 0 },
    downvote : {type : Number, default : 0},
    picture : {type : String, required : true}
})

export default mongoose.model('Post',Post)