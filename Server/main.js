
require("dotenv").config();
//#region express configures
var express = require("express");
var path = require("path");
var logger = require("morgan");
const DButils = require("./routes/utils/DButils");
const cors = require('cors');

const app = express();

app.use(logger("dev")); // logger
app.use(express.json()); // parse application/json
app.use(express.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname, "public"))); // To serve static files such as images, CSS files, and JavaScript files
app.use(express.static(path.join(__dirname, "dist"))); // static files for local

const corsConfig = {
  origin: true,
  credentials: true,
};

app.use(cors(corsConfig));
app.options("*", cors(corsConfig));

var port = process.env.PORT || "3000"; // local=3000 remote=80
//#endregion

const user = require("./routes/user");
const recipes = require("./routes/recipes");
const auth = require("./routes/auth");

// ----> For checking that our server is alive
app.get("/alive", (req, res) => res.send("I'm alive"));

// Routings
app.use("/user", user);
app.use("/recipes", recipes);
app.use("/auth", auth);

// Default router
app.use(function (err, req, res, next) {
  console.error(err);
  res.status(err.status || 500).send({ message: err.message, success: false });
});

const server = app.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});

process.on("SIGINT", function () {
  if (server) {
    server.close(() => console.log("server closed"));
  }
  process.exit();
});

// require("dotenv").config();
// //#region express configures
// var express = require("express");
// const session = require('express-session');
// var path = require("path");
// var logger = require("morgan");
// //const session = require("client-sessions");
// const DButils = require("./routes/utils/DButils");
// const cors = require('cors');

// const app = express();
// //app.use(bodyParser.json());

// app.use((req, res, next) => {
//   console.log("Received a request:", req.method, req.url); // לוג בסיסי לבדיקה
//   next();
// });

// app.use((req, res, next) => {
//   console.log("Current session:", req.session);
//   next();
// });



// app.use(logger("dev")); //logger
// app.use(express.json()); // parse application/json


// // app.use(
// //   session({
// //     cookieName: "session", // the cookie key name
// //     //secret: process.env.COOKIE_SECRET, // the encryption key
// //     secret: "template", // the encryption key
// //     duration: 24 * 60 * 60 * 1000, // expired after 20 sec
// //     activeDuration: 1000 * 60 * 5, // if expiresIn < activeDuration,
// //     cookie: {
// //       httpOnly: true,
// //       //secure: false, 
// //     }
// //     //the session will be extended by activeDuration milliseconds
// //   })
// // );

// app.use(session({
//   name: "session",
//   secret: "template", // מפתח ההצפנה
//   resave: false, // לא לשמור את ה-session אם לא נעשו שינויים
//   saveUninitialized: true, // לא לשמור session ריק
//   cookie: {
//     httpOnly: true,
//     secure: false, // true אם אתה משתמש ב-HTTPS
//     maxAge: 7 * 24 * 60 * 60 * 1000 // זמן תפוגה ב-milliseconds (כאן: שבוע אחד)
//   }
// }));
// app.use(express.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
// app.use(express.static(path.join(__dirname, "public"))); //To serve static files such as images, CSS files, and JavaScript files
// //local:
// app.use(express.static(path.join(__dirname, "dist")));
// //remote:
// // app.use(express.static(path.join(__dirname, '../assignment-3-3-basic/dist')));
// app.get("/",function(req,res)
// { 
//   //remote: 
//   // res.sendFile(path.join(__dirname, '../assignment-3-3-basic/dist/index.html'));
//   //local:
//   res.sendFile(__dirname+"/index.html");

// });

// // app.use(cors());
// // app.options("*", cors());


// const corsConfig = {
//   origin: true,
//   credentials: true
// };

// app.use(cors(corsConfig));
// app.options("*", cors(corsConfig));

// var port = process.env.PORT || "3000"; //local=3000 remote=80
// //#endregion
// const user = require("./routes/user");
// const recipes = require("./routes/recipes");
// const auth = require("./routes/auth");


// //#region cookie middleware
// app.use(function (req, res, next) {
//   if (req.session && req.session.user_id) {
//     DButils.execQuery("SELECT id FROM users")
//       .then((users) => {
//         if (users.find((x) => x.user_id === req.session.user_id)) {
//           req.user_id = req.session.user_id;
//         }
//         next();
//       })
//       .catch((error) => next());
//   } else {
//     next();
//   }
// });

// //#endregion

// // ----> For cheking that our server is alive
// app.get("/alive", (req, res) => res.send("I'm alive"));

// // Routings
// app.use("/user", user);
// app.use("/recipes", recipes);
// app.use("/auth", auth);

// // Default router
// app.use(function (err, req, res, next) {
//   console.error(err);
//   res.status(err.status || 500).send({ message: err.message, success: false });
// });



// const server = app.listen(port, () => {
//   console.log(`Server listen on port ${port}`);
// });

// process.on("SIGINT", function () {
//   if (server) {
//     server.close(() => console.log("server closed"));
//   }
//   process.exit();
// });
