import songsService from '../services/songs.service.js';

export default class songsongController {
    static async searchSongs(req, res) {
        const searchTerm = req.query.search;
        try {
            const songs = await songsService.searchSongs(searchTerm);
            res.status(200).send(songs);
        } catch (error) {
            res.status(500).send('Error while searching for songs');
        }
    }


     static async getSongsByGenre(req, res) {
    const genre = req.params.genre;
    try {
        const songs = await songsService.getSongsByGenre(genre);
        res.status(200).send(songs);
    } catch (error) {
        res.status(500).send('Error while fetching songs by genre');
    }

    }

    static async addNewSong(req, res) {
        try {
            const song = await songsService.addNewSong(req.body);
            res.status(200).send(song);
        } catch (error) {
            res.status(500).send(error);
        }
    }


}

