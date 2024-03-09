import express from 'express';
import { mockTestList } from '../../data/testList';

const router = express.Router();


router.get('/', (req, res) => {
  const pageNo = req.query['page-number'] as string;
  const pageSize = req.query['page-size'] as string;
  res.send(mockTestList({ pageNo, pageSize }));
});


export default router;
