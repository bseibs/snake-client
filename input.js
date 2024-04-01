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
    }
    const keyDirectionMap = {
      w: "up",
      a: "left",
      s: "down",
      d: "right",
    };
    const direction = keyDirectionMap[key];
    if (direction) {
      connection.write(`Move: ${direction}`);
    }
  };
  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = { setupInput };
