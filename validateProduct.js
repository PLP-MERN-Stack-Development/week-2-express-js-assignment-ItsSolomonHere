const { ValidationError } = require('../errors/ValidationError');

const validateProduct = (req, res, next) => {
  const { name, description, price, category, inStock } = req.body;

  if (!name || !description || typeof price !== 'number' || !category || typeof inStock !== 'boolean') {
    throw new ValidationError('Invalid product data');
  }

  next();
};

module.exports = validateProduct;
