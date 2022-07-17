import { Router } from 'express'
const router = Router();

import upload from '../libs/img_curse'

import {
    createController,
    getupdateController,
    getController,
    updateController,
    deleteController,
    getsController,
    getsControllerUser,
    //createController2,
    //updateController2
    //createOpinion,
    //delete_Opinion,
} from '../2.controllers/2_curses.controller'


router.route('/Controller')
    .post(upload.single('image'), createController)
    .get(getsController);

router.route('/Controller/:id')
    .get(getupdateController)
    .delete(deleteController)
    .put(upload.single('image'), updateController);

router.route('/getsControllerUser/:id')
    .get(getsControllerUser)

router.route('/ControllerCurseTeacher/:id')
    .get(getsController);


//Inicio
router.route('/ControllerAll/:id/:idw')
    .get(getController)

/*
// crear temas
router.route('/Controllers2')
.post(upload.single('image'), createController2);

// actualizar temas
router.route('/Controllers2/:id')
.put(upload.single('image'), updateController2);

// routes
router.route('/Controllers/opinion')
.post(createOpinion)
// routes
router.route('/Controllers/opinion/errase')
.post(delete_Opinion)
*/

export default router;
