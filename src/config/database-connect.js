const { Client } = require("pg");
require("../.env")
const client = new Client({
  user: APP_DATABASE_CONNECT_USER ,
  host: APP_DATABASE_CONNECT_URL,
  database: APP_DATABASE_DATABASE_1_NAME,
  password: APP_DATABASE_DATABASE_1_PASSWORD,
  port: APP_DATABASE_CONNECT_PORT,
});


module.exports = {
  client,
};
