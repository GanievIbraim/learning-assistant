const express = require("express");
const app = express();

const { ProductSize } = require("../../models/models").default.default;
const { ProductCategory } = require("../../models/models").default.default;
const { Part } = require("../../models/models").default.default;
const { Color } = require("../../models/models").default.default;
const { Material } = require("../../models/models").default.default;
const { PartCategory } = require("../../models/models").default.default;

// async function syncModels() {
//   const models = [
//     Part,
//     PartCategory,
//     ProductCategory,
//     ProductSize,
//     Color,
//     Material,
//   ];

//   for (const model of models) {
//     await model.destroy({ where: {} });
//     console.log(`All records in ${model.name} table deleted successfully.`);
//   }
// }

const createProdCat = async () => {
  const prodcats = [
    { name: "Футболка", image: "./image/material_cicek/футболка.jpeg" },
    { name: "Платье", image: "./image/material_cicek/платье.jpeg" },
    { name: "Брюки", image: "./image/material_cicek/брюки.jpeg" },
    { name: "Худи", image: "./image/material_cicek/худи.jpeg" },
    { name: "Юбка", image: "./image/material_cicek/юбка.jpeg" },
  ];

  for (const elem of prodcats) {
    await ProductCategory.create({
      name: elem.name,
      icon: elem.image,
    });
  }
};

const createColors = async () => {
  const colors = [
    { name: "Черный", image: "./image/color_cicek/black.jpeg" },
    { name: "Песочный", image: "./image/color_cicek/песочный.jpeg" },
    { name: "Фиолетовый", image: "./image/color_cicek/фиолетовый.jpeg" },
    { name: "Лавандовый", image: "./image/color_cicek/лавандовый.jpeg" },
    { name: "Розовый", image: "./image/color_cicek/розовый.jpeg" },
    { name: "Белый", image: "./image/color_cicek/белый.jpeg" },
    { name: "Серый", image: "./image/color_cicek/серый.jpeg" },
    { name: "Графит", image: "./image/color_cicek/графит.jpg" },
    { name: "Желтый", image: "./image/color_cicek/желтая.jpeg" },
    { name: "Оранжевый", image: "./image/color_cicek/оранжевый.jpeg" },
    { name: "Красный", image: "./image/color_cicek/красный.jpeg" },
    { name: "Синий", image: "./image/color_cicek/синий.jpeg" },
    { name: "Голубой", image: "./image/color_cicek/голубой.jpeg" },
    { name: "Зеленый", image: "./image/color_cicek/зеленый.jpeg" },
    { name: "Мятный", image: "./image/color_cicek/мятный.jpeg" },
    { name: "Хаки", image: "./image/color_cicek/хаки.jpeg" },
  ];
  for (const elem of colors) {
    await Color.create({ name: elem.name, icon: elem.image });
  }
};

const createMaterials = async () => {
  const materials = [
    { name: "Хлопок", image: "./image/material_cicek/хлопок.jpeg" },
    { name: "Лен", image: "./image/material_cicek/лен.jpeg" },
    { name: "Шелк", image: "./image/material_cicek/шелк.jpeg" },
    { name: "Шерсть", image: "./image/material_cicek/шерсть.jpeg" },
    {
      name: "Хлопчатобумажная смесь",
      image: "./image/material_cicek/хлопчатобумажная_смесь.jpeg",
    },
  ];
  for (const elem of materials) {
    await Material.create({ name: elem.name, icon: elem.image });
  }
};

const createPartCat = async () => {
  const partcats = [
    {
      name: "Крой",
      image: "./image/material_cicek/крой_худи.jpeg",
      product: "4",
    },
    {
      name: "Карман",
      image: "./image/material_cicek/карман_худи.jpeg",
      product: "4",
    },
    {
      name: "Капюшон",
      image: "./image/material_cicek/капюшон_худи.jpeg",
      product: "4",
    },
    {
      name: "Крой",
      image: "./image/material_cicek/крой_футболка.jpeg",
      product: "1",
    },
    {
      name: "Крой",
      image: "./image/material_cicek/крой_платье.jpeg",
      product: "2",
    },
    {
      name: "Рукав",
      image: "./image/material_cicek/рукав_платье.jpeg",
      product: "2",
    },
    {
      name: "Подол",
      image: "./image/material_cicek/подол_платье.jpeg",
      product: "2",
    },
    {
      name: "Крой",
      image: "./image/material_cicek/крой_брюки.jpeg",
      product: "3",
    },
    {
      name: "Талия",
      image: "./image/material_cicek/талия_брюки.jpeg",
      product: "3",
    },
    {
      name: "Конец",
      image: "./image/material_cicek/конец_брюки.jpeg",
      product: "3",
    },
    {
      name: "Крой",
      image: "./image/material_cicek/крой_юбка.jpeg",
      product: "5", //11
    },
    {
      name: "Длина",
      image: "./image/material_cicek/длина_юбка.jpeg",
      product: "5", //12
    },
    {
      name: "Пояс",
      image: "./image/material_cicek/пояс_юбка.jpeg",
      product: "5", //13
    },
    {
      name: "Длина",
      image: "./image/material_cicek/длина_футболка.jpeg",
      product: "1", //14
    },
    {
      name: "Горловина",
      image: "./image/material_cicek/горловина_футболка.jpeg",
      product: "1", //15
    },
  ];

  for (const elem of partcats) {
    await PartCategory.create({
      name: elem.name,
      icon: elem.image,
      product_categories_id: elem.product,
    });
  }
};

const createParts = async () => {
  const parts = [
    {
      name: "Обычный крой",
      image: "./image/part_categories/regular_fit_hoodie.jpeg",
      cat: "1",
    },
    {
      name: "Свободный крой",
      image: "./image/part_categories/oversized_fit_hoodie.jpeg",
      cat: "1",
    },
    {
      name: "Свитшот",
      image: "./image/part_categories/sweatshirt_fit_hoodie.jpeg",
      cat: "1",
    },
    {
      name: "Кенгуру-карман",
      image: "./image/pocket_categories/kangaroo_pocket_hoodie.jpeg",
      cat: "2",
    },
    {
      name: "Боковые карманы",
      image: "./image/pocket_categories/side_pockets_hoodie.jpeg",
      cat: "2",
    },
    {
      name: "Нагрудный карман",
      image: "./image/pocket_categories/chest_pocket_hoodie.jpeg",
      cat: "2",
    },
    {
      name: "Классический капюшон",
      cat: "3",
      image: "./image/hood_styles/classic_hood_hoodie.jpeg",
    },
    {
      name: "Капюшон с утяжкой",
      cat: "3",
      image: "./image/hood_styles/drawstring_hood_hoodie.jpeg",
    },
    {
      name: "Перекрещенный капюшон",
      cat: "3",
      image: "./image/hood_styles/crossover_hood_hoodie.jpeg",
    },
    {
      name: "Обычный крой",
      image: "./image/part_categories/regular_fit_footbolka.jpeg",
      cat: "4",
    },
    {
      name: "Свободный крой",
      image: "./image/part_categories/oversized_fit_footbolka.jpeg",
      cat: "4",
    },
    {
      name: "Свитшот",
      image: "./image/part_categories/sweatshirt_fit_footbolka.jpeg",
      cat: "4",
    },
    {
      name: "Прямой крой (A-line)",
      cat: "5",
      image: "./image/dress_styles/a_line_dress.jpeg",
    },
    {
      name: "Облегающий крой (Bodycon)",
      cat: "5",
      image: "./image/dress_styles/bodycon_dress.jpeg",
    },
    {
      name: "Принцесса-крой",
      cat: "5",
      image: "./image/dress_styles/princess_cut_dress.jpeg",
    },

    {
      name: "Короткий рукав",
      cat: "6",
      image: "./image/sleeve_styles/short_sleeve_dress.jpeg",
    },
    {
      name: "Длинный рукав",
      cat: "6",
      image: "./image/sleeve_styles/long_sleeve_dress.jpeg",
    },
    {
      name: "Безрукавное (футлярное) платье",
      cat: "6",
      image: "./image/sleeve_styles/sleeveless_dress.jpeg",
    },
    {
      name: "Прямой подол",
      cat: "7",
      image: "./image/hem_styles/straight_hem_dress.jpeg",
    },
    {
      name: "Расклешенный подол",
      cat: "7",
      image: "./image/hem_styles/flared_hem_dress.jpeg",
    },
    {
      name: "Макси-подол",
      cat: "7",
      image: "./image/hem_styles/maxi_hem_dress.jpeg",
    },
    {
      name: "Прямой крой (Straight Leg)",
      cat: "8",
      image: "./image/pant_styles/straight_leg_pants.jpeg",
    },
    {
      name: "Узкий крой (Slim Fit)",
      cat: "8",
      image: "./image/pant_styles/slim_fit_pants.jpeg",
    },
    {
      name: "Облегающий крой (Skinny)",
      cat: "8",
      image: "./image/pant_styles/skinny_pants.jpeg",
    },
    {
      name: "Обычная талия (Regular Waist)",
      cat: "9",
      image: "./image/waist_styles/regular_waist_pants.jpeg",
    },
    {
      name: "Пояс на бедрах (Low Rise)",
      cat: "9",
      image: "./image/waist_styles/low_rise_pants.jpeg",
    },
    {
      name: "Высокая талия (High Waist)",
      cat: "9",
      image: "./image/waist_styles/high_waist_pants.jpeg",
    },
    {
      name: "Прямой конец (Straight Hem)",
      cat: "10",
      image: "./image/hem_styles/straight_hem_pants.jpeg",
    },
    {
      name: "Завышенный (растянутый) конец (Cropped Hem)",
      cat: "10",
      image: "./image/hem_styles/cropped_hem_pants.jpeg",
    },
    {
      name: "Расклешенный конец (Flared Hem)",
      cat: "10",
      image: "./image/hem_styles/flared_hem_pants.jpeg",
    },
    {
      name: "Прямой",
      cat: "11",
      image: "./image/hem_styles/straight_kroi_skirt.jpeg",
    },
    {
      name: "Колокол",
      cat: "11",
      image: "./image/hem_styles/bell_kroi_skirt.jpeg",
    },
    {
      name: "Короткая",
      cat: "12",
      image: "./image/hem_styles/short_length_skirt.jpeg",
    },
    {
      name: "Средняя",
      cat: "12",
      image: "./image/hem_styles/middle_length_skirt.jpeg",
    },
    {
      name: "Длинная",
      cat: "12",
      image: "./image/hem_styles/long_length_skirt.jpeg",
    },
    {
      name: "Декоративная резинка кашкорсе",
      cat: "13",
      image: "./image/hem_styles/kashkorse_waist_skirt.jpeg",
    },
    {
      name: "Резинка со шнурком",
      cat: "13",
      image: "./image/hem_styles/lace_waist_skirt.jpeg",
    },
    {
      name: "До пояса",
      cat: "14",
      image: "./image/hem_styles/пояс_длина_футболка.jpeg",
    },
    {
      name: "До бедра",
      cat: "14",
      image: "./image/hem_styles/бедро_длина_футболка.jpeg",
    },
    {
      name: "Круглая",
      cat: "15",
      image: "./image/hem_styles/круглая_горловина_футболка.jpeg",
    },
    {
      name: "Треугольная",
      cat: "15",
      image: "./image/hem_styles/треугольная_горловина_футболка.jpeg",
    },
  ];

  for (const elem of parts) {
    await Part.create({
      name: elem.name,
      icon: elem.image,
      part_category_id: elem.cat,
    });
  }
};

const createSizes = async () => {
  const sizes = [
    {
      name: "XS-44",
    },
    {
      name: "S-46",
    },
    {
      name: "M-48",
    },
    {
      name: "L-50",
    },
    {
      name: "XL-52",
    },
    {
      name: "2XL-54",
    },
    {
      name: "3XL-56",
    },
    {
      name: "4XL-58",
    },
  ];
  for (const elem of sizes) {
    await ProductSize.create({
      name: elem.name,
    });
  }
};

const CreateAll = async (req, res) => {
  // await syncModels();
  await createProdCat();
  await createColors();
  await createMaterials();
  await createPartCat();
  await createParts();
  await createSizes();
  res.json("Таблицы заполнены успешно!");
};

module.exports = CreateAll;
