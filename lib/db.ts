import sqlite3 from 'sqlite3';
import { Customer, Media } from '../types';
import path from 'path';

export const getCustomers = async (): Promise<Customer[]> => {
    return new Promise((resolve, reject) => {
        const dbPath = path.resolve(process.cwd(), './mydb.sqlite');
        const db = new sqlite3.Database(dbPath, (err) => {
            if (err) {
                reject(err);
            }
        });

        const query = 'SELECT * FROM customers';
        db.all(query, [], (err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows as Customer[]);
            db.close();
        });
    });
};

export const getCustomersByUserId = async (userId: number): Promise<Customer[]> => {
    return new Promise((resolve, reject) => {
        const dbPath = path.resolve(process.cwd(), './mydb.sqlite');
        const db = new sqlite3.Database(dbPath, (err) => {
            if (err) {
                reject(err);
            }
        });

        const query = 'SELECT * FROM customers WHERE user_id = ?';
        db.all(query, [userId], (err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows as Customer[]);
            db.close();
        });
    });
};

export const getMedia = async (): Promise<Media[]> => {
    return new Promise((resolve, reject) => {
        const dbPath = path.resolve(process.cwd(), './mydb.sqlite');
        const db = new sqlite3.Database(dbPath, (err) => {
            if (err) {
                reject(err);
            }
        });

        const query = 'SELECT * FROM media';
        db.all(query, [], (err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows as Media[]);
            db.close();
        });
    });
};