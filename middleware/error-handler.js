const errorHandlerMiddleware =(err, req, res, next)=>{
 const defaultError={
  statusCode: err.statusCode || 500,
  msg: err.message || 'Something want wrong, try again later',
 }

 if (err.name === 'ValidationError') {
    defaultError.statusCode = 404
    defaultError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(', ')
  }

  if (err.code && err.code === 11000) {
    defaultError.statusCode = 404
    defaultError.msg = `${Object.keys(err.keyValue)} field has to be unique`
  }

  res.status(defaultError.statusCode).json({ msg: defaultError.msg })
}

export default errorHandlerMiddleware
