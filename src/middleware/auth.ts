import config from "../config/config";

const jwt = require("jsonwebtoken");

export class UserAuthMiddleware {
  handle(req, res, next) {
    const token = req.rawHeaders[1]?.split(" ")[1];
    if (token) {
      jwt.verify(token, config.jwtSecret, (err) => {
        if (err) {
          return res.status(401).json({ message: "Not authorized" });
        } else {
          next();
        }
      });
    } else {
      return res
        .status(401)
        .json({ message: "Not authorized, token not available" });
    }
  }
}
