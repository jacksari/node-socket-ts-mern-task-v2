import { Router } from 'express';
import {
  createUser,
  getUsers,
  getUserById,
  getUserBySlug,
  deleteUserById,
  updateUserById
} from './user.controller';
import { validarADMIN } from '../../middlewares/validar-admin';
import { validarJWT } from '../../middlewares/validar-jwt';
import validarCampos from '../../middlewares/validar-campos';
import { check } from 'express-validator';

const router = Router();

router.post(
  '/',
  [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos
  ],
  createUser
);

router.get(
  '/',
  [
    validarJWT,
    // validarADMIN
  ],
  getUsers
);

router.get(
  '/:id',
  [
    validarJWT,
    validarADMIN
  ],
  getUserById
);

router.put(
  '/:id',
  [
    //validarJWT,
    //validarADMIN
  ],
  updateUserById
);

router.get(
  '/slug/:slug',
  [
    //validarJWT,
    //validarADMIN
  ],
  getUserBySlug
);

router.delete(
  '/id',
  [
    //validarJWT,
    //validarADMIN
  ],
  deleteUserById
);

export default router;
