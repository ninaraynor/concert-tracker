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

const venueSchema = new Schema({
  name: String,
  location: String,
  date: Date,
  indoorOutdoor: { 
    type: String, 
    enum: ['indoor', 'outdoor'] 
  },    
  venueReviews: [reviewSchema],
  }, {
    timestamps: true
  });


module.exports = mongoose.model('Venue', venueSchema);