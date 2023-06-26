import Router from 'express'
import PostController from './PostController.js';

const router = Router();

router.post("/", PostController.create)
router.get("/",PostController.getAll)
router.get("/:streamerId", PostController.getOne)
router.put("/:streamerId/:vote", PostController.vote)

export default router
