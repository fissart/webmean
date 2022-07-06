import { Router } from 'express'
const router = Router();

import upload from '../libs/files_task'

import {
    createController,
    getupdateController,
    //getController,
    getsController,
    updateController,
    deleteController,
} from '../2.controllers/5_task.controller'

router.route('/Controller')
    .post(upload.single('image'), createController);

router.route('/Controller/:id')
    .get(getupdateController)
    .delete(deleteController)
    .put(upload.single('image'), updateController);

router.route('/ControllerAll/:user/:curse')
    .get(getsController)

export default router;
