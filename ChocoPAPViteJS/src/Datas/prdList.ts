import produit1 from "../Assets/Images/produit1.jpg";
import produit2 from "../Assets/Images/produit2.jpg";
import produit3 from "../Assets/Images/produit3.jpg";
import produit4 from "../Assets/Images/produit4.jpg";
import produit5 from "../Assets/Images/produit5.jpg";
import produit6 from "../Assets/Images/produit6.jpg";
import produit7 from "../Assets/Images/produit7.jpg";
import produit8 from "../Assets/Images/produit8.jpg";
import produit9 from "../Assets/Images/produit9.jpg";
import produit10 from "../Assets/Images/produit10.jpg";

export interface Product {
  idArticle: number,
  titleArticle: string,
  categories: string[],
  priceArticle: number,
  ratingArticle: number,
  textAltImg: string,
  descriptionArticle: string,
  ingredientsArticle: string,
  urlImg: string,
  available : boolean,
}

export const prdList: Product[] = [
  {
    idArticle: 1,
    titleArticle: "Rocher chocolat au coeur framboise",
    priceArticle: 12.5,
    ratingArticle: 4,
    textAltImg: "Photo de l'article",
    descriptionArticle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
      Ut enim ad minim veniam, quis nostrud exercitation ullamco \
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure \
      dolor in reprehenderit in voluptate velit esse cillum dolore eu \
      fugiat nulla pariatur.",
    ingredientsArticle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in \
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    urlImg: produit1,
    categories: [
      'milk',
      'fruit',
      'crunchy',
      'filled',
      'nuts',
    ],
    available: true,
  },
  {
    idArticle: 2,
    titleArticle: "Oeuf au chocolat fondant",
    priceArticle: 10,
    ratingArticle: 4.1,
    textAltImg: "Photo de l'article",
    descriptionArticle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
      Ut enim ad minim veniam, quis nostrud exercitation ullamco \
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure \
      dolor in reprehenderit in voluptate velit esse cillum dolore eu \
      fugiat nulla pariatur.",
    ingredientsArticle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in \
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    urlImg: produit2,
    categories: [
      'milk',
      'caramel',
      'molten',
    ],
    available: true,
  },
  {
    idArticle: 3,
    titleArticle: "Secret liqueur de fraise",
    priceArticle: 10,
    ratingArticle: 4.8,
    textAltImg: "Photo de l'article",
    descriptionArticle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
      Ut enim ad minim veniam, quis nostrud exercitation ullamco \
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure \
      dolor in reprehenderit in voluptate velit esse cillum dolore eu \
      fugiat nulla pariatur.",
    ingredientsArticle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in \
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    urlImg: produit3,
    categories: [
      'milk',
      'liqueur',
      'crunchy',
      'filled',
    ],
    available: false,
  },
  {
    idArticle: 4,
    titleArticle: "Coeur pur",
    priceArticle: 10,
    ratingArticle: 3.8,
    textAltImg: "Photo de l'article",
    descriptionArticle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
      Ut enim ad minim veniam, quis nostrud exercitation ullamco \
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure \
      dolor in reprehenderit in voluptate velit esse cillum dolore eu \
      fugiat nulla pariatur.",
    ingredientsArticle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in \
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    urlImg: produit4,
    categories: [
      'milk',
      'white',
      'liqueur',
      'fondant',
      'filled',
    ],
    available: true,
  },
  {
    idArticle: 5,
    titleArticle: "Bouchées noisettes",
    priceArticle: 10,
    ratingArticle: 4.8,
    textAltImg: "Photo de l'article",
    descriptionArticle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
      Ut enim ad minim veniam, quis nostrud exercitation ullamco \
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure \
      dolor in reprehenderit in voluptate velit esse cillum dolore eu \
      fugiat nulla pariatur.",
    ingredientsArticle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in \
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    urlImg: produit5,
    categories: [
      'milk',
      'liqueur',
      'crunchy',
      'molten',
      'fondant',
      'filled',
      'nuts',
    ],
    available: true,
  },
  {
    idArticle: 6,
    titleArticle: "Marbré deux chocolats",
    priceArticle: 10,
    ratingArticle: 2.4,
    textAltImg: "Photo de l'article",
    descriptionArticle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
      Ut enim ad minim veniam, quis nostrud exercitation ullamco \
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure \
      dolor in reprehenderit in voluptate velit esse cillum dolore eu \
      fugiat nulla pariatur.",
    ingredientsArticle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in \
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    urlImg: produit6,
    categories: [
      'milk',
      'white',
      'crunchy',
      'fondant',
      'filled',
      'nuts',
    ],
    available: true,
  },
  {
    idArticle: 7,
    titleArticle: "Secret molten chocofraise",
    priceArticle: 10,
    ratingArticle: 4.8,
    textAltImg: "Photo de l'article",
    descriptionArticle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
      Ut enim ad minim veniam, quis nostrud exercitation ullamco \
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure \
      dolor in reprehenderit in voluptate velit esse cillum dolore eu \
      fugiat nulla pariatur.",
    ingredientsArticle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in \
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    urlImg: produit7,
    categories: [
      'milk',
      'liqueur',
      'fruit',
      'crunchy',
      'molten',
      'fondant',
      'filled',
      'nuts',
    ],
    available: false,
  },
  {
    idArticle: 8,
    titleArticle: "Lingot craquant",
    priceArticle: 10,
    ratingArticle: 4.8,
    textAltImg: "Photo de l'article",
    descriptionArticle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
      Ut enim ad minim veniam, quis nostrud exercitation ullamco \
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure \
      dolor in reprehenderit in voluptate velit esse cillum dolore eu \
      fugiat nulla pariatur.",
    ingredientsArticle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in \
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    urlImg: produit8,
    categories: [
      'black',
      'crunchy',
      'fondant',
      'filled',
    ],
    available: true,
  },
  {
    idArticle: 9,
    titleArticle: "Choco grafitti",
    priceArticle: 10,
    ratingArticle: 4.8,
    textAltImg: "Photo de l'article",
    descriptionArticle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
      Ut enim ad minim veniam, quis nostrud exercitation ullamco \
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure \
      dolor in reprehenderit in voluptate velit esse cillum dolore eu \
      fugiat nulla pariatur.",
    ingredientsArticle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in \
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    urlImg: produit9,
    categories: [
      'milk',
      'crunchy',
      'fondant',
      'filled',
      'nuts',
    ],
    available: true,
  },
  {
    idArticle: 10,
    titleArticle: "Caramelchoc",
    priceArticle: 10,
    ratingArticle: 4.8,
    textAltImg: "Photo de l'article",
    descriptionArticle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
      Ut enim ad minim veniam, quis nostrud exercitation ullamco \
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure \
      dolor in reprehenderit in voluptate velit esse cillum dolore eu \
      fugiat nulla pariatur.",
    ingredientsArticle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in \
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    urlImg: produit10,
    categories: [
      'milk',
      'caramel',
      'fondant',
      'filled',
    ],
    available: false,
  },
];
