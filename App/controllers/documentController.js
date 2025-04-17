import { Document } from "../models/document.js";


export const uploadDocument = async (req, res) => {
  try {
    const { title, type, expiryDate, tags, reminder } = req.body;
    const fileUrl = req.file.path;

    const newDoc = new Document({
      title,
      type,
      expiryDate,
      tags: JSON.parse(tags),
      reminder,
      fileUrl,
    });

    await newDoc.save();
    res.status(201).json(newDoc);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getDocuments = async (req, res) => {
  try {
    const docs = await Document.find();
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteDocument = async (req, res) => {
  try {
    await Document.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const toggleReminder = async (req, res) => {
  try {
    const doc = await Document.findById(req.params.id);
    doc.reminder = !doc.reminder;
    await doc.save();
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
