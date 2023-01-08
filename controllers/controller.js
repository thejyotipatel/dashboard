const notFoundMiddleware = (req, res) => {
  res.status(404).send('Route does not exist')
}
const getAllData = async (req, res) => {
  res.status(200).json({ name: 'maya' })
}

export { getAllData }
