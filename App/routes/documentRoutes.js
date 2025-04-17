import express from 'express';
import multer from 'multer';
import {
  uploadDocument,
  getDocuments,
  deleteDocument,
  toggleReminder
} from '../controllers/documentController.js';

const router = express.Router();

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

router.post('/', upload.single('file'), uploadDocument);
router.get('/', getDocuments);
router.delete('/:id', deleteDocument);
router.patch('/reminder/:id', toggleReminder);

export default router;
