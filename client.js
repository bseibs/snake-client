const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });
  conn.on("connect", function () {
    console.log("successfully connected to game server!");
    conn.write("Name: BDS");
  });

  conn.on("data", function (data) {
    console.log("server says: ", data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = connect;
