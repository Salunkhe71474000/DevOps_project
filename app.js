const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'database-1.cjqko4uguz89.ap-southeast-2.rds.amazonaws.com',  // Replace with your RDS endpoint
  user: 'admin',      // Replace with your MySQL username
  password: 'Mysql1234',  // Replace with your MySQL password
  database: 'sakila'   // Replace with your MySQL database nameee
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database as ID', connection.threadId);
});

// Query the database
connection.query('SELECT * FROM your_table', (err, results) => {
  if (err) {
    console.error('Query error:', err);
  } else {
    console.log('Query results:', results);
  }
  connection.end();
});

