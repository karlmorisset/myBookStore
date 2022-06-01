const argon2 = require("argon2");
const models = require("../models");

class AuthController {
  static signup = async (req, res) => {
    const hashingOptions = {
      type: argon2.argon2id,
      memoryCost: 2 ** 16,
      timeCost: 5,
      parallelism: 1,
    };

    const hashPassword = (plainPassword) => {
      return argon2.hash(plainPassword, hashingOptions);
    };

    // const verifyPassword = (plainPassword, hashedPassword) => {
    //   return argon2.verify(hashedPassword, plainPassword, hashingOptions);
    // };

    const { firstname, lastname, email, password } = req.body;

    const hash = await hashPassword(password);

    const user = {
      firstname,
      lastname,
      email,
      hash,
    };

    // TODO validations (length, format...)

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
}

module.exports = AuthController;
