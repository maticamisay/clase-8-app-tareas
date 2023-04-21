const fs = require("fs");

function read() {
  const data = fs.readFileSync("./data.json", "utf8");
  const dataParsed = JSON.parse(data);
  return dataParsed;
}

module.exports = { read };