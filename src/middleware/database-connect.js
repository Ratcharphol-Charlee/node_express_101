const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "127.0.0.1",
  database: "database-1",
  password: "123456789",
  port: 5432,
});


module.exports = {
  client,
};
