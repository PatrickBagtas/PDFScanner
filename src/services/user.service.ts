import { User } from "../interface/user.interface";
import { httpService } from "./http.service";

export class UserService {

  public static createUser(email: string, password: string): Promise<User> {
    return httpService.post<User>('/users', { email, password }).then(res => res.data);
  }

}