require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
//const Youch = require('youch')
//const validate = require('express-validation')
const cors = require('cors');
const databaseConfig = require("./config/database");

class App {
  constructor() {
    this.express = express();
    this.isDev = process.env.NODE_ENV !== "production";

    this.database();
    this.middlewares();
    this.routes();
    //this.exception()
  }

  database() {
    mongoose.connect(databaseConfig.uri, {
      useCreateIndex: true, // Create the index when it saves
      useNewUrlParser: true, // Rewrote the tool it uses to parse MongoDB connection strings
      useFindAndModify: false, // Deprecated. Use findOneAndUpdate, findOneAndReplace or findOneAndDelete instead
      useUnifiedTopology: true // Use the new topology engine to monitors all the servers in a replica set or sharded cluster
    });
    mongoose.Promise = global.Promise;
  }

  middlewares() {
    this.express.use(cors());
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require("./routes"));
  }

  exception() {
    this.express.use(async (err, req, res, next) => {
      if (err instanceof validate.ValidationError) {
        return res.status(err.status).json(err);
      }

      if (process.env.NODE_ENV !== "production") {
        const youch = new Youch(err, req);

        return res.json(await youch.toJSON());
      }

      return res
        .status(err.status || 500)
        .json({ error: "Internal Server Error" });
    });
  }
}

module.exports = new App().express;
