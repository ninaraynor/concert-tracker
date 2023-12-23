const Concert = require('../models/concert');
const Venue = require('../models/venue');

const create = async(req, res) => {
    const concert = await Concert.findById(req.params.id);
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    concert.reviews.push(req.body);
    try {
      await concert.save();
    } catch (err) {
      console.log(err);
    }
    res.redirect(`/concerts/${concert._id}`);
  }

module.exports = {
  create
};