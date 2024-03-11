const { Color } = require("../../models/models");



const createColors = async () => {
  const colors = [
    { name: "Черный", image: "/image/color_cicek/black.jpeg" },
    { name: "Песочный", image: "/image/color_cicek/песочный.jpeg" },
    { name: "Фиолетовый", image: "/image/color_cicek/фиолетовый.jpeg" },
    { name: "Лавандовый", image: "/image/color_cicek/лавандовый.jpeg" },
    { name: "Розовый", image: "/image/color_cicek/розовый.jpeg" },
    { name: "Белый", image: "/image/color_cicek/белый.jpeg" },
    { name: "Серый", image: "/image/color_cicek/серый.jpeg" },
    { name: "Графит", image: "/image/color_cicek/графит.jpg" },
    { name: "Желтый", image: "/image/color_cicek/желтая.jpeg" },
    { name: "Оранжевый", image: "/image/color_cicek/оранжевый.jpeg" },
    { name: "Красный", image: "/image/color_cicek/красный.jpeg" },
    { name: "Синий", image: "/image/color_cicek/синий.jpeg" },
    { name: "Голубой", image: "/image/color_cicek/голубой.jpeg" },
    { name: "Зеленый", image: "/image/color_cicek/зеленый.jpeg" },
    { name: "Мятный", image: "/image/color_cicek/мятный.jpeg" },
    { name: "Хаки", image: "/image/color_cicek/хаки.jpeg" },
  ];
  for (const elem of colors) {
    await Color.create({ name: elem.name, icon: elem.image });
  }
};

module.exports = new ColorCreator();
