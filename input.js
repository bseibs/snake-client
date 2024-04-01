let connection;

const setupInput = function (conn) {
  connection = conn; // Assigning conn to module-wide variable connection.
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function (key) {
    if (key === "\u0003") {
      process.exit();
    } else if (key === "w") {
      connection.write("Move: up"); // Using the outer scope variable connection.
    } else if (key === "a") {
      connection.write("Move: left");
    } else if (key === "s") {
      connection.write("Move: down");
    } else if (key === "d") {
      connection.write("Move: right");
    }
  };
  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = { setupInput };
