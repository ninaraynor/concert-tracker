const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const venueSchema = new Schema({
    name: String,
    location: String,
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


module.exports = mongoose.model('Venue', venueSchema);