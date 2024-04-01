const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  // tells me i am connected and who is playing
  conn.on("connect", function () {
    console.log("successfully connected to game server!");
    conn.write("Name: BDS\n"); // Fix newline character
  });

  conn.on("data", function (data) {
    console.log("server says: ", data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect };

// * commenting out this code as it brings in multiple sakes. unsure if this is what the project wants.

// const net = require("net");
// const { IP, PORT } = require("./constants");

// // establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: IP,
//     port: PORT,
//   });
//   conn.on("connect", function () {
//     console.log("successfully connected to game server!");
//     conn.write("Name: BDS\n");
//   });

//   conn.on("data", function (data) {
//     console.log("server says: ", data);
//   });

//   // interpret incoming data as text
//   conn.setEncoding("utf8");

//   return conn;
// };

// console.log("Connecting ...");
// connect();

// module.exports = { connect };
