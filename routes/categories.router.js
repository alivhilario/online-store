const express = require('express');
const CategoryService = require('../services/categories.services');

const router = express.Router();
const service = new CategoryService();

// router.get('/', (req, res) => {
//   res.json([
//     {
//       categorie: faker.commerce.productAdjective(),
//     },
//     {
//       categorie: faker.commerce.productAdjective(),
//     }
//   ]);
// });

// router.get('/:id', (req, res) => {
//   const { id } = req.params;
//   res.json({
//     id,
//     categorie: faker.commerce.productAdjective(),
//   });
// });
router.get('/', (req, res) => {
  const categories = service.find();
    res.json(categories);
});

router.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId
  });
});

module.exports = router;
