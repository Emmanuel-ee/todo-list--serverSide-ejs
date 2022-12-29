const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let newTask;
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
let tasks = ["Buy Food", "Cook Food", "Eat Food"];

app.get("/", function (req, res) {
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  let day = today.toLocaleDateString("en-us", options);

  res.render("list", { kindOfDay: day, newListItem: tasks });
});

app.post("/", function (req, res) {
  let task = req.body.newItem;
  tasks.push(task);
  console.log(newTask);
  res.redirect("/");
});

// app.get("/", function (req, res) {
//   let today = new Date();
//   let currentDay = today.getDay();
//   let day = "";

//   switch (currentDay) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//       day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Sarturday";
//       break;
//     default:
//       console.log("Error: current day is equal to: " + currentDay);
//       console.log(currentDay)
//   }

//   console.log(today.getDay)

//   res.render("list", { kindOfDay: day });
// });

app.listen(3000, function () {
  console.log("server started on port 3000");
});
