const path = require("path");
const sqlite3 = require("sqlite3").verbose();

const dbPath = path.join(__dirname, "database.db");
const db = new sqlite3.Database(dbPath);

// Function to insert sample users
const insertSampleUsers = () => {
  const users = [
    { username: "john", email: "john@example.com" },
    { username: "jane", email: "jane@example.com" },
    { username: "bob", email: "bob@example.com" },
  ];

  const insertUser = db.prepare(
    "INSERT INTO users (username, email) VALUES (?, ?)",
  );

  users.forEach((user) => {
    insertUser.run(user.username, user.email);
  });

  insertUser.finalize();
};

// Function to insert sample customers
const insertSampleCustomers = () => {
  const customers = [
    { user_id: 1, name: "Customer1" },
    { user_id: 2, name: "Customer2" },
    { user_id: 3, name: "Customer3" },
  ];

  const insertCustomer = db.prepare(
    "INSERT INTO customers (user_id, name) VALUES (?, ?)",
  );

  customers.forEach((customer) => {
    insertCustomer.run(customer.user_id, customer.name);
  });

  insertCustomer.finalize();
};

// Function to insert sample invoices
const insertSampleInvoices = () => {
  const invoices = [
    { user_id: 1, customer_id: 1, amount: 100.0, date: "2024-01-01" },
    { user_id: 2, customer_id: 2, amount: 150.5, date: "2024-01-02" },
    { user_id: 3, customer_id: 3, amount: 75.25, date: "2024-01-03" },
  ];

  const insertInvoice = db.prepare(
    "INSERT INTO invoices (user_id, customer_id, amount, date) VALUES (?, ?, ?, ?)",
  );

  invoices.forEach((invoice) => {
    insertInvoice.run(
      invoice.user_id,
      invoice.customer_id,
      invoice.amount,
      invoice.date,
    );
  });

  insertInvoice.finalize();
};

// Call functions to insert sample data
insertSampleUsers();
insertSampleCustomers();
insertSampleInvoices();

console.log("Sample data inserted successfully.");

// Close the database connection
db.close();
