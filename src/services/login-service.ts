import { User } from "../entities/user";
import UserService from "./user-service";

export default class LoginService {
  // Try to define better types
  public async login(email: string, password: string, userService: UserService): Promise<User> {
    const users = await userService.getAllUsers();

    const user = users.find((u) => u.email === email && u.password === password);

    if (!user) {
      throw new Error("Email or password incorrect!")
    }

    return user
  }
}
