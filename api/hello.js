module.exports = (req, res) => {
  const { name = 'World' } = req.query
  res.sendStatus(200)
}