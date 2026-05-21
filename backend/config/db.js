const mysql = require("mysql2/promise");
require("dotenv").config();

const db = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "web_dkv",

  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// test koneksi database
async function testConnection() {
  try {
    const connection = await db.getConnection();

    console.log("Database terkoneksi");

    connection.release();
  } catch (err) {
    console.error("Database gagal konek:", err.message);
  }
}

testConnection();

module.exports = db;