import express from 'express';
import ctrl from '../controllers/course.controler';

const router = express.Router();

router.route('/courses')
    .get(ctrl.list)
    .post(ctrl.create);

router.route('/courses/:id')
    .get(ctrl.read)
    .put(ctrl.update)
    .delete(ctrl.remove);

export default router;