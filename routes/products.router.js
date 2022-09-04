const express = require('express');
const ProductService = require('../services/products.services');

const router = express.Router();
const service = new ProductService();


router.get('/', async (req, res) => {
  const products = await service.find();
    res.json(products);
});

// router.get('/special', (req, res) => {
//   const products = [];
//   for (let i = 0; i < 10; i++) {
//     products.push({
//       name: faker.commerce.productName(),
//       price: parseInt(faker.commerce.price(),10),
//       imageUrl: faker.image.imageUrl(),
//       image: faker.image.cats(),
//       datatype: faker.datatype.json()
//     });
//   }
//     res.json(products);
// });

router.get('/filter', (req, res) => {
  res.send('Just a filter');
});//ALL what is specific must be before all dynamic


router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    next(error);
  }

});

router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(res.json(product));
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }

});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id)
  res.json(rta);
});



module.exports = router;
