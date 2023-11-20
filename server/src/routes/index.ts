import { Router } from "express";
import UserController from "../controllers/UserController";

const router = Router();

router.get("/", UserController.helloWorld);
router.get("/users", UserController.getall);
router.get("/users/:id", UserController.getById);
router.get("/users/filters", UserController.getByFilter);
router.post("/users/create", UserController.createUser);
router.delete("/users/delete/:id", UserController.deleteUser);
router.put("/users/delete/:id", UserController.deleteUser);

export default router;
