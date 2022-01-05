const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
    host: "localhost",
    user: "root",
    password: "cdac",
    database: "bank_trans",
};

/*
const checkConnection = async () => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  console.log("CONNECTION SUCCESS");
  await connection.endAsync();
};
*/

async function connectionCheck() {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    console.log("CONNECTION SUCCESS");
    await connection.endAsync();
}