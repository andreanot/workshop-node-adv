import { Router } from 'express';

import songsController from '../controller/songs.controller.js';

const router = Router();

router.get('/', songsController.searchSongsByTitle);

router.get('/bygenre/:genre', songsController.getSongsByGenre);

router.get('/:id?', songsController.getAllSongs)

router.post('/',songsController.addNewSongs)







export default router;