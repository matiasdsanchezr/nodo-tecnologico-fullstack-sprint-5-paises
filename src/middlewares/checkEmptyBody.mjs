function isEmptyObject(obj) {
  for (var x in obj) {
    return false;
  }
  return true;
}

export const checkEmptyBody = (req, res, next) => {
  if (isEmptyObject(req.body))
    return res.status(400).json({
      status: "error",
      message: "El body de la petición esta vacío o no posee ningún dato valido",
      errors: errors.array().map((error) => ({
        field: error.path,
        message: error.msg,
      })),
    });
  next();
};
