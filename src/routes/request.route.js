import express from "express";
import RequestController from "../controllers/request.controller.js";

const router = express.Router();

router.get("/request", RequestController.generateAdivce);



export {router};
