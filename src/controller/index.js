import express from 'express';

class IndexController {
  constructor() {
    this.router = express.Router();
    this.router.get('/', this.getIndex);
  }

  getIndex(req, res) {
    res.render('index');
  }
}

export default IndexController;
