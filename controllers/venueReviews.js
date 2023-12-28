const Venue = require('../models/venue');

const create= async(req, res) => {
    const venue = await Venue.findById(req.params.id);
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    venue.venueReviews.push(req.body);
    try {
      await venue.save();
    } catch (err) {
      console.log(err);
    }
    res.redirect(`/venues/${venue._id}`);
  }

  const deleteVenueReview = async (req, res) => {
    const venue = await Venue.findOne({'venueReviews._id': req.params.id });
    if (!venue) return res.redirect('/venues')
    venue.venueReviews.remove(req.params.id)
    await venue.save()
    res.redirect(`/venues/${venue._id}`)
  };

module.exports = {
  create,
  delete: deleteVenueReview
};