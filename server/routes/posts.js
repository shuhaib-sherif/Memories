import express from 'express'
import { getPosts , createPosts,updatePosts,deletePost,updateLikes} from '../controllers/posts.js';

const router=express.Router()

router.get('/getPosts',getPosts);
router.post('/createPost',createPosts);
router.patch('/updatePosts/:id',updatePosts)
router.delete('/deletePost/:id',deletePost)
router.patch('/updateLikes/:id',updateLikes)

export default router
