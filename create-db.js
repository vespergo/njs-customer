const path = require("path");
const sqlite3 = require("sqlite3").verbose();

const dbPath = path.join(__dirname, "database.db");
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
  // Create users table
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY,
      username TEXT NOT NULL,
      email TEXT NOT NULL
    )
  `);

  // Create customers table with foreign key reference to users
  db.run(`
    CREATE TABLE IF NOT EXISTS customers (
      id INTEGER PRIMARY KEY,
      user_id INTEGER NOT NULL,
      name TEXT NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `);

  // Create invoices table with foreign key references to users and customers
  db.run(`
    CREATE TABLE IF NOT EXISTS invoices (
      id INTEGER PRIMARY KEY,
      user_id INTEGER NOT NULL,
      customer_id INTEGER NOT NULL,
      amount REAL NOT NULL,
      date TEXT NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users(id),
      FOREIGN KEY (customer_id) REFERENCES customers(id)
    )
  `);

  console.log("Database created successfully.");
});

db.close((err) => {
  if (err) {
    console.error("Error closing database:", err.message);
  }
});
