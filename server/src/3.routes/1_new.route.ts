import { Router } from 'express'
const router = Router();

import upload from '../libs/img_new'

import {
    createController,
    getupdateController,
    getController,
    getsController,
    updateController,
    deleteController,
    updateController_show
} from '../2.controllers/1_new.controller'

router.route('/Controller')
    .post(upload.single('image'), createController);

router.route('/Controller/:id')
    .get(getupdateController)
    .delete(deleteController)
    .put(upload.single('image'), updateController);

router.route('/Controller_show/:id')
.put(updateController_show);

router.route('/ControllerAll')
    .get(getsController)

export default router;
