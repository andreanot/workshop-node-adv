import mongoose from 'mongoose';

const artistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    albums: [
        {
            name: {
                type: String,
                required: true
            },
    
        }
    ]
});

const Artist = mongoose.model('Artist', artistSchema);

export default Artist;