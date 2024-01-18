const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./mydb.sqlite');

// Function to seed users
const seedUsers = () => {
    const users = [
        { name: 'John Doe', email: 'john@example.com' },
        { name: 'Jane Doe', email: 'jane@example.com' }
        // Add more users here
    ];
    users.forEach(user => {
        db.run('INSERT INTO users (name, email) VALUES (?, ?)', [user.name, user.email]);
    });
};

// Function to seed customers
const seedCustomers = () => {
    const customers = [
        { user_id: 1, name: 'Customer 1', email: 'customer1@example.com' },
        { user_id: 1, name: 'Customer 2', email: 'customer2@example.com' },
        // Add more customers here
    ];
    customers.forEach(customer => {
        db.run('INSERT INTO customers (user_id, name, email) VALUES (?, ?, ?)', [customer.user_id, customer.name, customer.email]);
    });
};

// Function to seed invoices
const seedInvoices = () => {
    const invoices = [
        { customer_id: 1, amount: 100.50 },
        { customer_id: 2, amount: 200.75 },
        // Add more invoices here
    ];
    invoices.forEach(invoice => {
        db.run('INSERT INTO invoices (customer_id, amount) VALUES (?, ?)', [invoice.customer_id, invoice.amount]);
    });
};
// Funtion to seed Media files
const seedMedia = () => {
    const media = [
        {   
            user_id: 1,
            location:'/media/file1', 
            picture_location: 'media/file1/picture',
            name: "file1"
        },
        {   
            user_id: 1,
            location:'/media/file2', 
            picture_location: 'media/file2/picture',
            name: "file2"
        },
        {   
            user_id: 2,
            location:'/media/file3', 
            picture_location: 'media/file3/picture',
            name: "file3"
        },
    ];
    media.forEach(media => {
        db.run(
            'INSERT INTO media (user_id, location, picture_location, name) VALUES (?, ?, ?, ?)', 
            [media.user_id, media.location, media.picture_location, media.name]);
    });
};

db.serialize(() => {
    db.run('PRAGMA foreign_keys=ON');
    seedUsers();
    seedCustomers();
    seedInvoices();
    seedMedia();
});

db.close();
