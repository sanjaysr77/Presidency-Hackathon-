import mongoose from 'mongoose';

const documentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String },
  expiryDate: { type: String },
  tags: [String],
  reminder: { type: Boolean, default: false },
  fileUrl: { type: String, required: true }, // file storage URL (e.g., local or S3)
}, { timestamps: true });

export const Document = mongoose.model('Document', documentSchema);
