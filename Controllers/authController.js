import User from '../models/userModel.js';

export const signup = async (req, res, next) => {
  const newUser = await User.create(req.body);
  res.status(201).json({
    status: 'success',
    message: 'User Successfully Created',
    data: {
      data: newUser,
    },
  });
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({
      status: 'error',
      message: 'Please provide an email and a password',
    });
  }
  const user = User.findOne({ email }).select('+password');

  if (!user || !(await user.correctPassword(password, user.password))) {
    res.status(401).json({
      status: 'error',
      message: 'incorrect email or password',
    });
  } else {
    res.status(200).json({
      status: 'success',
      message: 'you have successfully logged in',
    });
  }
};
