const Venue = require('../models/venue');

const index = async(req, res) => {
    const venues = await Venue.find({});
    res.render('venues/index', { title: 'My Venue History', venues });
  }

const newVenue = async(req, res) => {
  res.render('venues/new', { title: 'Add Venue', errorMsg: '' });
};


module.exports = {
    index,
    new: newVenue
  };