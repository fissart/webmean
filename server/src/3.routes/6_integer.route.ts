import { Router } from 'express'
const router = Router();

import upload from '../libs/files_task'

import {
    createController,
    getupdateController,
    getController,
    getsController,
    updateController,
    deleteController,
getControlleruser,
getintegerController
} from '../2.controllers/6_integer.controller'

router.route('/Controller')
    .post(upload.single('image'), createController);

router.route('/Controller/:id')
    .get(getupdateController)
    .delete(deleteController)
    .put(upload.single('image'), updateController);

router.route('/Controllerintegerscurse/:id')
    .get(getController)

    router.route('/Controllerintegersaverage/:id')
        .get(getintegerController)


router.route('/Controllerintegeruser/:id')
    .get(getControlleruser)


router.route('/ControllerAll/:id')
    .get(getController)

export default router;
