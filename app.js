const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);
const express = require("express");

const app = express();

app.use(express.json());

const articleRoutes = require("./routes/articleRoutes");

app.use("/api/articles", articleRoutes);

module.exports = app;