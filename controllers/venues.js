const Venue = require('../models/venue');

const index = async(req, res) => {
    const venues = await Venue.find({});
    res.render('venues/index', { title: 'My Venue History', venues });
  }

const newVenue = async(req, res) => {
  res.render('venues/new', { title: 'Add Venue', errorMsg: '' });
};

const create = async(req,res) => {
  try {
    await Venue.create(req.body);
    res.redirect('/venues');
  } catch (err) {
    console.log(err);
    res.render('venues/new', { errorMsg: err.message });
  }
};

module.exports = {
    index,
    new: newVenue,
    create
  };