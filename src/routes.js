const express = require("express");
//const validate = require("express-validation");
const handle = require("express-async-handler");

const routes = express.Router();

const authMiddleare = require("./app/middlewares/auth");
const baseUrlConfig = require("./config/baseurl");

const controllers = require("./app/controllers");
//const validators = require("./app/validators");

routes.post(
  `${baseUrlConfig.url}/users`,
  //validate(validators.User),
  handle(controllers.UserController.store)
);
routes.post(
  `${baseUrlConfig.url}/sessions`,
  //validate(validators.Session),
  handle(controllers.SessionController.store)
);

routes.use(authMiddleare);

/**
 * games
 */

routes.get(
  `${baseUrlConfig.url}/games`,
  handle(controllers.GameController.index)
);
routes.get(
  `${baseUrlConfig.url}/games/:id`,
  handle(controllers.GameController.show)
);

routes.post(
  `${baseUrlConfig.url}/game`,
  //validate(validators.Game),
  handle(controllers.GameController.store)
);

routes.put(
  `${baseUrlConfig.url}/game/:id`,
  //validate(validators.Game),
  handle(controllers.GameController.update)
);

routes.delete(
  `${baseUrlConfig.url}/game/:id`,
  handle(controllers.GameController.destroy)
);

module.exports = routes;
