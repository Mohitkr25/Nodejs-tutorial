//Npm module
// const color = require("cli-color");
// console.log(color.blue("Hello nodeJs"));
const auth = require("./auth");

// auth.register("phoenix");
// auth.login("phoenix", "password");

// core Modules
const path = require("path");

// dirname
// console.log("folder name: ", path.dirname(__filename));
// file Name
// console.log("folder name: ", path.basename(__filename));
// Extension Name
// console.log("Extension name: ", path.extname(__filename));

//parse
// console.log("Parse : ", path.parse(__filename));
//join
// console.log("Join  ", path.join(__dirname, "order", "App.js"));

//File system
const fs = require("fs");

//Make a directory
// fs.mkdir(path.join(__dirname, "/test"), (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
// });
// create file
// fs.writeFile(
//   path.join(__dirname, "./test", "a.txt"),
//   "hello new file \n",
//   (err) => {
//     if (err) {
//       throw err;
//     }
//     fs.appendFile(
//       path.join(__dirname, "test", "a.txt"),
//       "text updated",
//       (err) => {
//         if (err) {
//           console.log(err);
//         }
//         console.log("file updated");
//       }
//     );
//     console.log("file created");
//   }
// );

//Read a file
// fs.readFile(path.join(__dirname, "test", "a.txt"), "utf-8", (err, data) => {
//   if (err) {
//     throw err;
//   }
//   //   const content = Buffer.from(data);
//   console.log(data);
// });

//operatinig Sysem module

const os = require("os");
// console.log("OS type:", os.type());
// console.log("OS type:", os.platform());
// console.log("CPU architecture:", os.arch());
// console.log("CPU details:", os.cpus());
// console.log("Free Memory:", os.freemem());
// console.log("Total Memory:", os.totalmem());
// console.log("Restart uptime:", os.uptime());

//events module

const Emitter = require("events");
const myEmiter = new Emitter();

// myEmiter.on("somename", (data) => {
//   console.log(data);
// });

// myEmiter.emit("somename", {
//   name: "Mohit",
// });

// class mAuth extends Emitter {
//   register(username) {
//     console.log("Registered succcesfully with username : ", username);
//     this.emit("register", username);
//   }
// }
// const mauth = new mAuth();
// // listener
// mauth.on("register", (data) => {
//   console.log(`sending email to the ${data}`);
// });
// mauth.register("Mohit");
