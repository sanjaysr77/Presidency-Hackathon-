import express from 'express';
import Template from '../models/template.model.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
      const templates = await Template.find();
      res.json(templates);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch templates' });
    }
  });

export default router;
