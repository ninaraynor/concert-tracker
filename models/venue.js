const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const venueSchema = new Schema({
  name: String,
  location: String,
  date: Date,
  indoorOutdoor: { 
    type: String, 
    enum: ['indoor', 'outdoor'] 
  },  
}, {
    timestamps: true
  });



module.exports = mongoose.model('Venue', venueSchema);