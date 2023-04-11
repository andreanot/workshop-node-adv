import { Router } from 'express';

import ArtistsController from '../controller/artists.controller.js';

const router = Router();

router.get('/:id?', ArtistsController.getSongsByArtist)

router.post('/', ArtistsController.addNewSArtists)

router.put('/:id', ArtistsController.updateArtists)





export default router;