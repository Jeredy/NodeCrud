import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { myDataSource } from "../../ormconfig";
import config from "../config/config";
import { Users } from "../entity/User.entity";

export default class AuthController {
  async handle(req: Request, res: Response) {
    const { username, password } = req.body;
    const userRepository = myDataSource.getRepository("users");

    if (!(username && password)) {
      res.status(400).send();
    }

    // Check if user exists
    const user = await userRepository.findOne({ where: { username } });

    if (!user) {
      res.status(404).send({ message: "Incorrect user or password" });
      return;
    }
    // Check if encrypted password match
    if (!user.checkIfUnencryptedPasswordIsValid(password)) {
      res.status(404).send({ message: "Incorrect user or password" });
      return;
    }
    AuthController.signJwt(user as Users, res);
  }

  public static signJwt(user: Users, res) {
    // Sing JWT, valid for 1 hour
    const token = jwt.sign(
      { userId: user.id, username: user.username },
      config.jwtSecret
      // { expiresIn: "1h" }
    );
    let firstTimeLoggedIn = false;

    try {
      // Send the jwt in the response
      res.send({ jwt: token });
    } catch (error) {
      res.status(401).send();
    }
  }
}
