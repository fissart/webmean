import { Router } from 'express'
const router = Router();

import upload from '../libs/img_user'
import { getSController, createController, deleteController, updateController, signin, getController, getupdateController } from '../2.controllers/1_users.controller'


//C
router.route('/Controller')
    .post(upload.single('image'), createController);

//RUD
router.route('/Controller/:id')
    .delete(deleteController)
    .get(getupdateController)
    .put(upload.single('image'), updateController);

//Inicio
router.route('/ControllerAll/:id')
    .get(getController)

//inicio sesion
router.route('/Controllersign/:re/:uu')
    .get(signin)

//All users only
router.route('/ControllerGetusers/:id')
    .get(getSController)

//router.route('/Controller')
//   .get(getController)


export default router;
