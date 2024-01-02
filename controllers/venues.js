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

const addVenueReview = async (req, res) => {
  try {
    const venue = await Venue.findById(req.params.id);
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    venue.venueReviews.push(req.body);
    await venue.save();
    res.redirect(`/venues/${venue._id}`);
  } catch (err) {
    console.log(err);
    res.render('venues/', { errorMsg: err.message });
  }
};

const deleteVenue = async (req, res) => {
  try {
    const venue = await Venue.findByIdAndDelete(req.params.id);
    if (!venue) {
      return res.status(404).json({ message: 'Venue not found' });
    }
    const updatedVenues = await Venue.find(); 
    res.status(200).redirect(`/venues/`);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
    index,
    new: newVenue,
    create,
    show,
    addVenueReview,
    delete: deleteVenue
  };