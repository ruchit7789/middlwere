let middlewere = (req, res, next) => {
  console.log(req.body);
  req.body.name = req.body.name.toUpperCase();
  req.body.surname = req.body.surname.toUpperCase();
  req.body.add = req.body.address.toUpperCase();
  next();
};

module.exports = { middlewere };
