const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");

const app = express();

app.use(express.json());

const articleRoutes = require("./routes/articleRoutes");
const authRoutes = require("./routes/authRoutes");

app.use("/api/articles", articleRoutes);
app.use("/api/auth", authRoutes);

module.exports = app;