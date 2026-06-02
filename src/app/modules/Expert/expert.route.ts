import express from 'express';
import { ExpertControllers } from './expert.controller';
import { validateRequest } from '../../middlewares/validateRequest';
import { ExpertValidations } from './expert.validation';
import { multerUpload } from '../../config/multer.config';
import { checkAuth } from '../../middlewares/checkAuth';
import { Role } from '../User/user.interface';

const router = express.Router();

router.post(
  '/',
  checkAuth(Role.ADMIN),
  multerUpload.single('file'),
  (req, res, next) => {
    if (req.body.tags && typeof req.body.tags === 'string') {
      try {
        req.body.tags = JSON.parse(req.body.tags);
      } catch (error) {
        req.body.tags = [];
      }
    }
    next();
  },
  validateRequest(ExpertValidations.createExpertValidationSchema),
  ExpertControllers.createExpert,
);

router.patch(
  '/:id',
  checkAuth(Role.ADMIN),
  multerUpload.single('file'),
  (req, res, next) => {
    if (req.body.tags && typeof req.body.tags === 'string') {
      try {
        req.body.tags = JSON.parse(req.body.tags);
      } catch (error) {
        req.body.tags = [];
      }
    }
    next();
  },
  validateRequest(ExpertValidations.updateExpertValidationSchema),
  ExpertControllers.updateExpert,
);

router.get('/', ExpertControllers.fetchAlExperts);
router.get('/:id', ExpertControllers.getSingleExpert);
router.delete('/:id', checkAuth(Role.ADMIN), ExpertControllers.deleteExpert);

export const ExpertRoutes = router;
