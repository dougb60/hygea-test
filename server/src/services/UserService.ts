import { database } from "../main";
import { User } from "../entities/User";
import { Like } from "typeorm";

class UserService {
  // @TODO: incluir paginação
  async getAllUsers() {
    const users = await database.manager.find(User, {
      take: 10,
      order: { name: "ASC" },
    });
    return users;
  }

  async getUserById(id: number) {
    const user = await database.manager.findOneBy(User, {
      id,
    });

    return user;
  }

  async getByFilter(filters: Record<string, string>) {
    const filterObject: Record<string, any> = {};

    Object.keys(filters).forEach((key) => {
      filterObject[key] = Like(`%${filters[key]}%`);
    });

    const filteredUser = await database.manager.find(User, {
      where: filterObject,
      take: 10,
    });

    return filteredUser;
  }

  async createUser(user: User) {
    let date;
    if (user.birthdate) date = new Date(user.birthdate);

    const newUser = await database.manager.create(User, {
      ...user,
      birthdate: date,
    });

    const created = await database.manager.save<User>(newUser);
    return created;
  }

  async deleteUser(id: number) {
    const user = await this.getUserById(id);

    if (user) {
      const deleted = await database.manager.remove(user);
      return deleted;
    }

    return null;
  }

  async updateUser(user: User) {
    const userId = user.id;

    const updated = await database.manager.update(User, userId, user);
    if (updated.affected && updated.affected > 0) return true;

    return false;
  }
}

export default new UserService();
