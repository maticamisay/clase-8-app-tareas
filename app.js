const { read } = require("./crud/read");
const { create } = require("./crud/create");

const data = process.argv;

const comand = (comando, param1, param2) => {
  switch (comando) {
    case "read":
      console.log(read());
      break;
    case "create":
      create(param1, param2);
      break;
    case "delete":
      //  funcion para borrar una tarea
      break;
    default:
      console.log("no se encontró ningun comando que coincida");
      break;
  }
};

comand(data[2], data[3], data[4]);