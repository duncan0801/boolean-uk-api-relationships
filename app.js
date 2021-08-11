var express = require("express");
var path = require("path");
// var cookieParser = require('cookie-parser');
var logger = require("morgan");

var app = express();

app.use(logger("dev"));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

const doctorsRouter = require("./src/resources/doctors/router");
const appointmentsRouter = require("./src/resources/appointments/router");

app.use("/doctors", doctorsRouter);
app.use("/appointments", appointmentsRouter);

app.all("*", (req, res) => {
	res.json({ msg: "This is the end" });
});

module.exports = app;
