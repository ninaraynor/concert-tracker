const Concert = require('../models/concert');

const index = async (req, res) => {
  const concerts = await Concert.find({});
  res.render('concerts/index', { title: 'Tracking Concerts', concerts });
};

const newConcert = (req, res) => {
  // render an errorMsg if the create action fails
  res.render('concerts/new', { title: 'Rate a Show!', errorMsg: '' });
};

const create = async(req,res) => {
  try {
    await Concert.create(req.body);
    res.redirect('/concerts');
  } catch (err) {
    console.log(err);
    res.render('concerts/new', { errorMsg: err.message });
  }
};

module.exports = {
    index, 
    new: newConcert,
    create
};
