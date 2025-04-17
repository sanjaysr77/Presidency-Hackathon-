import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './App/lib/db.js'
import cors from 'cors'
import router from './App/routes/documentRoutes.js'
import templateRoutes from './App/routes/templates.js'
import aiRoutes from './App/routes/ai.js'
dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // serve files
app.use('/api/documents', router);
app.use('/api/templates', templateRoutes);
app.use('/api/ai', aiRoutes);

const PORT = process.env.PORT_URL || 5000

app.listen(PORT, () => {
    console.log(`Server is running on Port: ${PORT}`)
    connectDB()
})