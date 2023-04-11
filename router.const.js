import { Router } from "express";

import artistsRoutes from './routes/artists.routes.js'
import songsRoutes from './routes/songs.routes.js'

const router = Router();


router.use('/artists' , artistsRoutes)

router.use('/songs' , songsRoutes);

export default router;


