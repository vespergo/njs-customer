const sqlite3 = require('sqlite3').verbose();

// Connect to the SQLite database
const db = new sqlite3.Database('./mydb.sqlite', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the mydb.sqlite database.');
});

// SQL statements to create tables with email fields
const createUserTable = `
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
);
`;

const createCustomerTable = `
CREATE TABLE IF NOT EXISTS customers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
`;

const createInvoiceTable = `
CREATE TABLE IF NOT EXISTS invoices (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    customer_id INTEGER NOT NULL,
    amount DECIMAL NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(id)
);
`;

// Execute the SQL statements to create tables
db.serialize(() => {
    db.run(createUserTable);
    db.run(createCustomerTable);
    db.run(createInvoiceTable);
});

// Close the database connection
db.close((err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Closed the database connection.');
});
