import express from "express";
import { createComment, deleteComment } from "../controllers/videoControllers";

const apiRouter = express.Router();

apiRouter.post("/videos/:id([0-9a-f]{24})/comment", createComment);
apiRouter.delete("/videos/:videoId([0-9a-f]{24})/comment/:commentId([0-9a-f]{24})", deleteComment);

export default apiRouter;
