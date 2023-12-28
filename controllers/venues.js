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

const show = async(req, res) => {
  venue = await Venue.findById(req.params.id); 
  res.render('venues/show', { title: 'Venues Detail', venue })
};

const addReview = async (req, res) => {
  try {
    const venue = await Venue.findById(req.params.id);
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    venue.reviews.push(req.body);

    await venue.save();
    res.redirect(`/venues/${venue._id}`);
  } catch (err) {
    console.log(err);
    res.render('venues/', { errorMsg: err.message });
  }
};

module.exports = {
    index,
    new: newVenue,
    create,
    show,
    addReview
  };