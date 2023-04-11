import artistsService from '../services/artists.service.js';

export default class artistsController {
    
    static async getSongsByArtist(req, res) {
        const artistId = req.params.id;
        try {
          const songs = await songsService.getSongsByArtist(artistId);
          res.status(200).send(songs);
        } catch (error) {
          res.status(500).send('Error while fetching songs');
        }
      }

    static async addNewSArtists(req, res) {
        try {
            const artist = await artistsService.addNewSArtists(req.body);
            res.status(201).send(artist)
        } catch (error) {
            res.status(500).send(error)
        }
    }



    static async searchArtists(req, res) {
        const searchTerm = req.query.q;
        try {
            const artists = await artistsService.searchArtists(searchTerm);
            res.status(200).send(artists);
        } catch (error) {
            res.status(500).send('Error while searching artists');
        }
    }

    
}