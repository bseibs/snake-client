let connection;

const setupInput = function (conn) {
  connection = conn; // Assigning conn to module-wide variable connection.
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // exits the game with control + c
  const handleUserInput = function (key) {
    if (key === "\u0003") {
      process.exit();
    }
    //maps out all controls into an object for easy callback
    const keyDirectionMap = {
      w: "up",
      a: "left",
      s: "down",
      d: "right",
    };
    //function that calls upon my movement map
    const direction = keyDirectionMap[key];
    if (direction) {
      connection.write(`Move: ${direction}`);
    }
    //a simple greeting to throw in - can add more if necessary
    if (key === "h") {
      connection.write("Say: hi");
    }
  };
  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = { setupInput };
