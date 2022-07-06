﻿import { Router } from 'express'
const router = Router();
import upload from '../libs/img_collection'
import { getsController, createController, deleteController, updateController, getupdateController } from '../2.controllers/12_EDUCACION.controller'
//C
router.route('/')
    .post(upload.single('image'), createController)
    .get(getsController);
//RUD
router.route('/:id')
    .delete(deleteController)
    .get(getupdateController)
    .put(upload.single('image'), updateController);
export default router;
