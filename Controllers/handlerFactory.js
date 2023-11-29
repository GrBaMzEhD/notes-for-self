export const getOne = (model) => {
  async (req, res, next) => {
    const doc = await model.findById(req.params.id);
    if (!doc) {
      res.status(404).json({
        status: 'ERROR',
        message: 'No document found with that ID',
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  };
};
