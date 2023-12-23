const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const venueSchema = new Schema({
    name: String,
    location: String,
    date: Date,
    type: { 
      type: String, 
      enum: ['indoor', 'outdoor'] 
  }, 
    // reviews: [venueReviewSchema],
  }, {
      timestamps: true
    });


module.exports = mongoose.model('Venue', venueSchema);