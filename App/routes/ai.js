// routes/ai.js
import express from 'express'
import OpenAI  from 'openai';
import dotenv from 'dotenv'
dotenv.config()
const router = express.Router();


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  
  router.post('/', async (req, res) => {
    try {
      const { messages } = req.body;
  
      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a helpful legal assistant.' },
          ...messages,
        ],
      });
  
      res.json({ reply: completion.choices[0].message.content });
    } catch (error) {
      console.error('AI Route Error:', error);
      res.status(500).json({ error: 'AI response failed.' });
    }
  });

export default router
