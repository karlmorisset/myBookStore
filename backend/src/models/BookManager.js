const AbstractManager = require("./AbstractManager");

class BookManager extends AbstractManager {
  static table = "book";

  insert(item) {
    return this.connection.query(
      `insert into ${BookManager.table} (title) values (?)`,
      [item.title]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${BookManager.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = BookManager;
