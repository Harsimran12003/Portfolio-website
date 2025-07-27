const EduExp = require('../models/EduExp');

// Get all education/experience entries
exports.getEduExp = async (req, res) => {
  try {
    const data = await EduExp.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new entry
exports.addEduExp = async (req, res) => {
  try {
    const newEntry = new EduExp(req.body);
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update an entry
exports.updateEduExp = async (req, res) => {
  try {
    const updated = await EduExp.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete an entry
exports.deleteEduExp = async (req, res) => {
  try {
    await EduExp.findByIdAndDelete(req.params.id);
    res.json({ message: 'Entry deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
