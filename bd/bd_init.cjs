const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');

async function createTables() {
  const db = await open({
    filename: 'database.db',
    driver: sqlite3.Database,
  });

  try {
    await db.exec(`
      CREATE TABLE IF NOT EXISTS requests (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        fio TEXT NOT NULL,
        nomer_telefona TEXT NOT NULL,
        email TEXT NOT NULL,
        type INTEGER NOT NULL CHECK (type IN (0, 1)),
        date TEXT NOT NULL,
        zayavka_status INTEGER NOT NULL CHECK (zayavka_status IN (0, 1, 2, 3, 4)),
        comment TEXT
      );
    `);

    await db.exec(`
      CREATE TABLE IF NOT EXISTS calculator (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        request_id INTEGER NOT NULL,
        title TEXT NOT NULL,
        all_price REAL NOT NULL,
        FOREIGN KEY (request_id) REFERENCES requests (id) ON DELETE CASCADE
      );
    `);

    await db.exec(`
      CREATE TABLE IF NOT EXISTS selected_products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        calculator_id INTEGER NOT NULL,
        title TEXT NOT NULL,
        price REAL NOT NULL,
        FOREIGN KEY (calculator_id) REFERENCES calculator (id) ON DELETE CASCADE
      );
    `);

    console.log('Tables created successfully');
  } catch (error) {
    console.error('Error creating tables:', error);
  } finally {
    await db.close();
  }
}

createTables();