import Song from '../models/songs.model.js';

export default class songsService {
    static async getAllSongs() {
        return await Song.find();
    }

    static async getSongsById(id) {
        return await Song.findById(id);
    }

    static async getSongsByArtist(artist) {
        return await Song.find({ artist: artist });
    }

    static async getSongsByGenre(genre) {
        return await Song.find({ genre: genre });
    }

    static async addNewSong(song) {
        return await Song.create(song);
    }

    static async updateSong(id, updates) {
        return await Song.findByIdAndUpdate(id, updates, { new: true });
    }


}