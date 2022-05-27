const argon2 = require("argon2");
const models = require("../models");

class AuthController {
  static hashingOptions = {
    type: argon2.argon2id,
    memoryCost: 2 ** 16,
    timeCost: 5,
    parallelism: 1,
  };

  static hashPassword(plainPassword) {
    return argon2.hash(plainPassword, this.hashingOptions);
  }

  static verifyPassword(plainPassword, hashedPassword) {
    return argon2.verify(hashedPassword, plainPassword, this.hashingOptions);
  }

  static success(res, user) {
    return res.status(200).json({
      userId: user.id,
      token: "TOKEN",
    });
  }

  static error(res) {
    return res.status(401).json({ error: "Erreur d'authentification" });
  }

  static signup = async (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    const hash = await this.hashPassword(password);
    const user = { firstname, lastname, email, hash };

    models.user
      .insert(user)
      .then(([result]) => {
        res.status(201).send({ ...user, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static login = async (req, res) => {
    const { email, password } = req.body;

    const [user] = await models.user.find({ email });
    console.warn(user);

    const isValid = await this.verifyPassword(password, user.password);
    return isValid ? this.success(res, user) : this.error(res);
  };
}

module.exports = AuthController;
