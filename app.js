const express = require("express");

const cors = require("cors");

require("dotenv").config();

const app = express();

const { connectToMongoDb } = require("./handlers/mongoDbHandler");

const default_routes = require("./routes/default_routes");

const auth_routes = require("./routes/auth_routes");

const review_routes = require("./routes/review_routes");

const comment_routes = require("./routes/comment_routes");

const report_routes = require("./routes/report_routes");

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: process.env.HOST,
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

connectToMongoDb();

app.use(default_routes);

app.use(auth_routes);

app.use("/review",review_routes);

app.use("/comment", comment_routes)

app.use("/report",report_routes)

app.listen(process.env.PORT, "0.0.0.0", async () => {
  console.log("Server is running on port:", process.env.PORT);
});
