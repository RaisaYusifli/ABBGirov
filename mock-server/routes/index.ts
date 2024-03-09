import express from 'express';
import testRouter from './test';
import customersRouter from './user'
import productCodeRouter from './productCode'
import pledgesRouter from './pledges'
const router = express.Router();

router.use('/test', testRouter);
router.use('/customers',customersRouter)
router.use('/products',productCodeRouter)
router.use('/pledges',pledgesRouter)
export default router;
