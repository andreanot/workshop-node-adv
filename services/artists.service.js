import Artists from '../models/artists.model.js';

export default class ArtistsService {
  static async getAllArtists() {
    try {
      const artists = await Artists.find();
      return artists;
    } catch (error) {
      throw new Error('Could not fetch all artists');
    }
  }

  static async getArtistsById(id) {
    try {
      const artist = await Artists.findById(id);
      if (!artist) {
        throw new Error('Artist not found');
      }
      return artist;
    } catch (error) {
      throw new Error('Could not fetch artist by id');
    }
  }

  static async addNewArtist(artistData) {
    try {
      const artist = new Artists(artistData);
      await artist.save();
      return artist;
    } catch (error) {
      throw new Error('Could not add new artist');
    }
  }

  static async updateArtist(id, artistData) {
    try {
      const artist = await Artists.findByIdAndUpdate(
        id,
        artistData,
        { new: true } 
      );
      if (!artist) {
        throw new Error('Artist not found');
      }
      return artist;
    } catch (error) {
      throw new Error('Could not update artist');
    }
  }


  static async getSongsByArtist(artistId) {
    try {
      const artist = await Artists.findById(artistId);
      if (!artist) {
        throw new Error('Artist not found');
      }
      return artist.songs;
    } catch (error) {
      throw new Error('Could not fetch songs by artist');
    }
  }
  
}


