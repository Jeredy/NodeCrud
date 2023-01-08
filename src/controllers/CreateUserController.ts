import { Request, Response } from "express";
import { myDataSource } from "../../ormconfig";
import { Users } from "../entity/User.entity";

export default class UserController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;
    const newUser = new Users();
    const repo = myDataSource.getRepository(Users);

    newUser.username = username;
    newUser.password = password;

    //hashpassword
    newUser.hashPassword();

    // check if username or email exist alreay
    const user = await repo.findOne({ where: { username } });

    if (user) {
      response.status(400).send({ message: "username is already taken" });
    } else {
      const result = await repo.save(newUser);
      response.status(200).send(result);
    }
  }
}
