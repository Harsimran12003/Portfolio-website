const Education = require('../models/Education');

const getEducation = async (req, res) => {
  try {
    const education = await Education.find().sort({ duration: -1 });
    res.status(200).json(education);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve education data', error });
  }
};

module.exports = { getEducation };
