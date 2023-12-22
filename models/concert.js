const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const concertSchema = new Schema({
  artist:  String,
    // type: Schema.Types.ObjectId, 
    // ref: 'ArtistOrBand' ,
  venue: String,
  date: Date,
  setlist: [{ 
    type: String 
}],
  rating: Number,
  review: [{
    type: String 
}],
}, {
    timestamps: true
});

module.exports = mongoose.model('Concert', concertSchema);
