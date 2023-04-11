import mongoose from 'mongoose';

const songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Artist',
    required: true
  },
  album: {
    type: String
  },
  genre: {
    type: String
  }
});

const Song = mongoose.model('Song', songSchema);

export default Song;