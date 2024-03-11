const { Material } = require("../../models/models");

const createMaterials = async () => {
  const materials = [
    { name: "Хлопок", image: "/image/material_cicek/хлопок.jpeg" },
    { name: "Лен", image: "/image/material_cicek/лен.jpeg" },
    { name: "Шелк", image: "/image/material_cicek/шелк.jpeg" },
    { name: "Шерсть", image: "/image/material_cicek/шерсть.jpeg" },
    {
      name: "Хлопчатобумажная смесь",
      image: "./image/material_cicek/хлопчатобумажная_смесь.jpeg",
    },
  ];
  for (const elem of materials) {
    await Material.create({ name: elem.name, icon: elem.image });
  }
};

module.exports = new MaterialCreator();
