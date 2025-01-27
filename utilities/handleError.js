function handleError(res, message, statusCode = 404) {
  return res.status(statusCode).json({
    success: false,
    message
  });
}

export default handleError;