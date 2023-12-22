const Concert = require('../models/concert');

const index = async (req, res) => {
    const concerts = await Concert.find({});
  res.render('concerts/index', { title: 'Tracking Concerts', concerts });
};

function newConcert(req, res) {
  // render an errorMsg if the create action fails
  res.render('concerts/new', { title: 'Rate a Show!', errorMsg: '' });
}

module.exports = {
    index, 
    new: newConcert
};
