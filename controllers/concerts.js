const Concert = require('../models/concert');

const index = async (req, res) => {
  const concerts = await Concert.find({});
  res.render('concerts/index', { title: 'My Concert History', concerts });
};

const newConcert = (req, res) => {
  // render an errorMsg if the create action fails
  res.render('concerts/new', { title: 'Add Concert', errorMsg: '' });
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

const show = async(req, res) => {
  concert = await Concert.findById(req.params.id); 
	res.render('concerts/show', { title: 'Concert Detail', concert })
};

const addReview = async (req, res) => {
  try {
    const concert = await Concert.findById(req.params.id);
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    concert.reviews.push(req.body);

    await concert.save();
    res.redirect(`/concerts/${concert._id}`);
  } catch (err) {
    console.log(err);
    res.render('concerts/', { errorMsg: err.message });
  }
};

module.exports = {
    index, 
    new: newConcert,
    create,
    show,
    addReview,
};
