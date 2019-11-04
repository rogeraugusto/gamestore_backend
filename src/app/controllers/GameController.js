const Game = require("../models/Game");

class GameController {
  async index(req, res) {
    const filters = {};

    if (req.query.price_min || req.query.price_max) {
      filters.price = {};

      if (req.query.price_min) {
        filters.price.$gte = req.query.price_min;
      }

      if (req.query.price_max) {
        filters.price.$lte = req.query.price_max;
      }
    }

    if (req.query.title) {
      filters.title = new RegExp(req.query.title, "i");
    }

    const games = await Game.paginate(filters, {
      page: req.query.page || 1,
      limit: 20,
      //populate: ['seller'],
      sort: "-createdAt"
    });

    return res.json(games);
  }

  async show(req, res) {
    const game = await Game.findById(req.params.id);

    return res.json(game);
  }

  async store(req, res) {
    const game = await Game.create({ ...req.body/*, seller: req.userId*/ });

    return res.json(game);
  }

  async update(req, res) {
    const game = await Game.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    return res.json(game);
  }

  async destroy(req, res) {
    await Game.findByIdAndDelete(req.params.id);

    return res.json();
  }
}

module.exports = new GameController();
