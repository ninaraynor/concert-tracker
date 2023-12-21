const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const concertSchema = new Schema({
  artistOrBand: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'ArtistOrBand' 
}],
  venue: String,
  date: Date,
  setlist: [{ 
    type: String 
}],
  rating: Number,
  review: [{
    type: Schema.Types.ObjectId, ref: 'ConcertReview' 
}],
}, {
    timestamps: true
});

module.exports = mongoose.model('Concert', concertSchema);
