const Concert = require('../models/concert');
const Review = require('../models/concert'); 

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
    // try {
    //   const review = await Review.findOneAndDelete({ _id: req.params.id });
  
    //   if (!review) {
    //     return res.status(404).json({ message: 'Review not found' });
    //   }
    //   res.status(204).end();
    // } catch (err) {
    //   console.error(err);
    //   res.status(500).json({ message: 'Internal Server Error' });
    // }
  };
  
  module.exports = {
    create,
    delete: deleteReview
  };