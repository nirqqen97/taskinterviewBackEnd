import Post from './Post.js'
import PostService from './PostService.js'

class PostController {
    async create (req,res) { 
        try {
            
            const post = await PostService.create(req.body)
            res.status(200).json(post)

        } catch (error) {
            res.status(500).json(error)
        }
    }
    async getAll (req,res) { 
        try {
            const findedPosts = await PostService.getAll()
           res.status(200).json(findedPosts)

        } catch (error) {
            res.status(500).json(error)
        } 
    }
    async getOne (req,res) { 
        try {         
           const Fidnedpost = await PostService.getOne(req.params.streamerId)
           res.status(200).json(Fidnedpost)

        } catch (error) {
            res.status(500).json(error + 'error')
        } 
    }
 
    async vote (req,res) { 
        try {
         
            const updatedUser = await PostService.vote(req.params)
            res.status(200).json(updatedUser)
            
        } catch (error) {
            res.status(500).json(error)
        } 
    }
    
}

export default new PostController()