const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "user";

  find(email) {
    return this.connection.query(
      `select * from  ${this.table} where email = ?`,
      [email]
    );
  }

  insert(item) {
    return this.connection.query(
      `insert into ${UserManager.table} (firstname, lastname, email, password) values (?,?,?,?)`,
      [item.firstname, item.lastname, item.email, item.hash]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${UserManager.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = UserManager;
