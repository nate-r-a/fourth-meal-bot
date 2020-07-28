module.exports = (req, res) => {
  const { name = 'World' } = req.query
  res.json({ok: true})
}