import express, { Router } from "express";
import UserController from "../controllers/UserController";

const router = Router();
router.use(express.json());

router.get("/", UserController.helloWorld);
router.get("/users", UserController.getall);
router.get("/users/filters", UserController.getByFilter);
router.get("/users/:id", UserController.getById);
router.post("/users/create", UserController.createUser);
router.delete("/users/delete/:id", UserController.deleteUser);
// router.put("/users/put/:id", UserController.deleteUser);

export default router;
