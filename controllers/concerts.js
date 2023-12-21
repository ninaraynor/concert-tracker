const Concert = require('../models/concert');

const index = async (req, res) => {
    const concerts = await Concert.find({});
  res.render('concerts/index', { title: 'Tracking Concerts', concerts });
};

module.exports = {
    index
};
