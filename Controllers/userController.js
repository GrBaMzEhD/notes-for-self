import User from '../models/userModel.js';

export const getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

export const getUser = async (req, res, next) => {
  const doc = await User.findById(req.params.id);
  res.status(200).json({
    status: 'success',
    data: {
      data: doc,
    },
  });
};
