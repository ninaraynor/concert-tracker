const Venue = require('../models/venue');

const index = async(req, res) => {
    const venues = await Venue.find({});
    res.render('venues/index', { title: 'All Venues', venues });
  }

module.exports = {
    index,
  };