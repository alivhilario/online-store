const { faker } = require('@faker-js/faker');


class CategoryService {

  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 47;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(),10),
        image: faker.image.imageUrl(),
    });
  }
  }

  create() {

  }

  find() {
    return this.products;
  }

  findOne(id) {
    const name = this.getTotal();
    return this.products.find(item => item.id === id);
  }

  update() {

  }

  delete() {

  }

}

module.exports = CategoryService;


/**Access to DATA (DAO) */
