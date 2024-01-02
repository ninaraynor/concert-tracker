const Concert = require('../models/concert');

const create = async(req, res) => {
  console.log(req.params.id)
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

  const deleteReview = async (req, res) => {
    const concert = await Concert.findOne({'reviews._id': req.params.id });
    if (!concert) return res.redirect('/concerts')
    concert.reviews.remove(req.params.id)
    await concert.save()
    res.redirect(`/concerts/${concert._id}`)
  };
  
  module.exports = {
    create,
    delete: deleteReview
  };