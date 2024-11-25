const validate = (schema) => async (req, res, next) => {
  try {
    const passBody = await schema.parseAsync(req.body);
    req.body = passBody;
    next();
  } catch (err) {
    const status = 404;
    const message = "Input filed error";
    const extraDetails = err.errors[0].message;
    const error = {
      status,
      message,
      extraDetails,
    };
    next(error);
  }
};

module.exports = validate;
