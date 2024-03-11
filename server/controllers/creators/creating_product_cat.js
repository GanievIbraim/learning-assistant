const { ProductCategory } = require("../../models/models");

createProdCat = async () => {
  const prodcats = [
    { name: "Футболка", image: "./image/material_cicek/футболка.jpeg" },
    { name: "Платье", image: "./image/material_cicek/платье.jpeg" },
    { name: "Брюки", image: "./image/material_cicek/брюки.jpeg" },
    { name: "Худи", image: "./image/material_cicek/худи.jpeg" },
  ];

  for (const elem of prodcats) {
    await ProductCategory.create({
      name: elem.name,
      icon: elem.image,
    });
  }
};

module.exports = createProdCat;
