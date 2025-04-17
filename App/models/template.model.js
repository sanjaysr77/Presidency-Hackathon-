import mongoose from 'mongoose';

const clauseSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const templateSchema = new mongoose.Schema({
  type: { type: String, required: true }, // e.g., 'Rental', 'Freelance', 'Partnership'
  title: { type: String, required: true },
  clauses: [clauseSchema],
});

export default mongoose.model('Template', templateSchema);
