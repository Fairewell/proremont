const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database.sqlite');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS requests (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      fio TEXT,
      phone TEXT,
      email TEXT,
      type INTEGER,
      date TEXT,
      status INTEGER,
      comment TEXT,
      title TEXT,
      total_price REAL,
      selected_products TEXT
    )
  `);
});

db.close();
