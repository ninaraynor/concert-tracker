const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userName: String,
  userAvatar: String,
}, {
  timestamps: true
});

const concertSchema = new Schema({
  artist:  String,
  venue: String,
  date: Date,
  setlist: [{ 
    type: String 
}],
  reviews: [reviewSchema],
}, {
    timestamps: true
});

module.exports = mongoose.model('Concert', concertSchema);
