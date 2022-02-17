exports.handleErrors = (err, _, res, next) => {
  res
    .status(err.status ?? 500)
    .send({ message: err.message ?? "Internal server error" });
};
