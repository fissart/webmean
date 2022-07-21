﻿import { Router } from 'express'
const router = Router();
import upload from '../libs/img_collection'
import { getsController, createController, deleteController, updateController, getupdateController } from '../2.controllers/33_AVERAGE.controller'
//C
router.route('/')
    .post(createController)
    .get(getsController);
//RUD
router.route('/:id')
    .get(getupdateController)
    .delete(deleteController)
    .put(updateController);
export default router;
