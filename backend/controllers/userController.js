const User = require('../models/User');

exports.getUser = async (req, res) => {
  const user = await User.findOne();
  res.json(user);
};

exports.updateUser = async (req, res) => {
  const updated = await User.findOneAndUpdate({}, req.body, { new: true });
  res.json(updated);
};
