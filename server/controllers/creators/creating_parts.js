const { Part } = require("../../models/models");

createParts = async () => {
  parts = [
    {
      name: "Обычный крой",
      image: "/image/part_categories/regular_fit_hoodie.jpeg",
      cat: "1",
    },
    {
      name: "Свободный крой",
      image: "/image/part_categories/oversized_fit_hoodie.jpeg",
      cat: "1",
    },
    {
      name: "Свитшот",
      image: "/image/part_categories/sweatshirt_fit_hoodie.jpeg",
      cat: "1",
    },
    {
      name: "Кенгуру-карман",
      image: "/image/pocket_categories/kangaroo_pocket.jpeg",
      cat: "2",
    },
    {
      name: "Боковые карманы",
      image: "/image/pocket_categories/side_pockets.jpeg",
      cat: "2",
    },
    {
      name: "Нагрудный карман",
      image: "/image/pocket_categories/chest_pocket.jpeg",
      cat: "2",
    },
    {
      name: "Классический капюшон",
      cat: "3",
      image: "/image/hood_styles/classic_hood.jpeg",
    },
    {
      name: "Капюшон с утяжкой",
      cat: "3",
      image: "/image/hood_styles/drawstring_hood.jpeg",
    },
    {
      name: "Перекрещенный капюшон",
      cat: "3",
      image: "/image/hood_styles/crossover_hood.jpeg",
    },
    {
      name: "Обычный крой",
      image: "/image/part_categories/regular_fit_footbolka.jpeg",
      cat: "4",
    },
    {
      name: "Свободный крой",
      image: "/image/part_categories/oversized_fit_footbolka.jpeg",
      cat: "4",
    },
    {
      name: "Свитшот",
      image: "/image/part_categories/sweatshirt_fit_footbolka.jpeg",
      cat: "4",
    },
    {
      name: "Прямой крой (A-line)",
      cat: "5",
      image: "/image/dress_styles/a_line_dress.jpeg",
    },
    {
      name: "Облегающий крой (Bodycon)",
      cat: "5",
      image: "/image/dress_styles/bodycon_dress.jpeg",
    },
    {
      name: "Принцесса-крой",
      cat: "5",
      image: "/image/dress_styles/princess_cut_dress.jpeg",
    },

    {
      name: "Короткий рукав",
      cat: "6",
      image: "/image/sleeve_styles/short_sleeve_dress.jpeg",
    },
    {
      name: "Длинный рукав",
      cat: "6",
      image: "/image/sleeve_styles/long_sleeve_dress.jpeg",
    },
    {
      name: "Безрукавное (футлярное) платье",
      cat: "6",
      image: "/image/sleeve_styles/sleeveless_dress.jpeg",
    },
    {
      name: "Прямой подол",
      cat: "7",
      image: "/image/hem_styles/straight_hem_dress.jpeg",
    },
    {
      name: "Расклешенный подол",
      cat: "7",
      image: "/image/hem_styles/flared_hem_dress.jpeg",
    },
    {
      name: "Макси-подол",
      cat: "7",
      image: "/image/hem_styles/maxi_hem_dress.jpeg",
    },
    {
      name: "Прямой крой (Straight Leg)",
      cat: "8",
      image: "/image/pant_styles/straight_leg_pants.jpeg",
    },
    {
      name: "Узкий крой (Slim Fit)",
      cat: "8",
      image: "/image/pant_styles/slim_fit_pants.jpeg",
    },
    {
      name: "Облегающий крой (Skinny)",
      cat: "8",
      image: "/image/pant_styles/skinny_pants.jpeg",
    },
    {
      name: "Обычная талия (Regular Waist)",
      cat: "9",
      image: "/image/waist_styles/regular_waist_pants.jpeg",
    },
    {
      name: "Пояс на бедрах (Low Rise)",
      cat: "9",
      image: "/image/waist_styles/low_rise_pants.jpeg",
    },
    {
      name: "Высокая талия (High Waist)",
      cat: "9",
      image: "/image/waist_styles/high_waist_pants.jpeg",
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

module.exports = new PartCreator();
