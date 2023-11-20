import { Request, Response, NextFunction } from "express";
import UserService from "../services/UserService";
import { User } from "../entities/User";

class UserController {
  async helloWorld(req: Request, res: Response, next: NextFunction) {
    console.log("Ola mundo!");
    res.end();
  }

  async getall(req: Request, res: Response) {
    try {
      const users = await UserService.getAllUsers();
      res.status(200).send(users);
    } catch (err) {
      res.status(500).send({ error: true, message: `Erro => ${err}` });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id, 10);
      const user = await UserService.getUserById(id);

      if (user) {
        res.status(200).send({ user, error: false });
        return;
      }

      res.status(404).send({ error: true, message: "Usuário não encontrado." });
    } catch (err) {
      res.status(500).send({ error: true, message: `Erro => ${err}` });
    }
  }

  async getByFilter(req: Request, res: Response) {
    try {
      const filters = req.query as unknown as Record<string, string>;
      const filteresUsers = await UserService.getByFilter(filters);

      res.status(200).send(filteresUsers);
    } catch (err) {
      console.log(err);

      res.status(500).send({ error: true, message: `Erro => ${err}` });
    }
  }

  async createUser(req: Request, res: Response) {
    const user = req.body as User;

    try {
      const created = await UserService.createUser(user);

      if (created.id) res.status(200).send({ error: false });
    } catch (err) {
      res.status(500).send({ error: true, message: `Erro => ${err}` });
    }
  }

  async deleteUser(req: Request, res: Response) {
    const id = parseInt(req.params.id, 10);

    try {
      const deleted = await UserService.deleteUser(id);

      if (deleted) {
        res.status(200).send({ error: false });
        return;
      }

      res.status(404).send({ error: true, message: "Usuário não encontrado." });
    } catch (err) {
      res.status(500).send({ error: true, message: `Erro => ${err}` });
    }
  }

  async updateUser(req: Request, res: Response) {
    const user = req.body as User;

    try {
      const updated = await UserService.updateUser(user);

      if (updated) {
        res.status(200).send({ error: false });
        return;
      }

      res.status(204).send({ error: false, message: "Nenhuma linha afetada." });
    } catch (err) {
      res.status(500).send({ error: true, message: `Erro => ${err}` });
    }
  }
}

export default new UserController();
