const User = require('../models/User');

exports.getUser = async (req, res) => {
  try {
    let user = await User.findOne();

    if (!user) {
      user = await User.create({
        name: 'Harsimranjit Kaur',
        nationality: 'Indian',
        email: 'harsimran12003@gmail.com',
        phone: '9914322503',
        freelance: 'Available',
        qualification: 'B.Tech in Computer Science',
        github: 'https://github.com/Harsimran12003',
        languages: ['English', 'Hindi', 'Punjabi'],
        bio: 'Passionate about building user-centric, responsive, and efficient web applications.'
      });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get user' });
  }
};


