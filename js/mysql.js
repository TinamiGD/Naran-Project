const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "username",
  password: "password",
  database: "name",
});

connection.connect((error) => {
  if (error) {
    console.log("Error connecting to database: ", error);
  } else {
    console.log("Connected to database.");
    // perform database operations here
  }
});

connection.query("SELECT * FROM product", (error, results) => {
  if (error) {
    console.log("Error fetching data: ", error);
  } else {
    console.log("Fetched data: ", results);
    // process the data here
  }
});
