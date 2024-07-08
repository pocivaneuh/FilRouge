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
import { categoriesList } from "./categoriesList";


type Product = {
  idArticle: number,
  titleArticle: string,
  category: string,
  priceArticle: number,
  ratingArticle: number,
  textAltImg: string,
  descriptionArticle: string,
  ingredientsArticle: string,
  urlImg: string,
  milk: boolean,
  white: boolean,
  black: boolean,
  caramel: boolean,
  liqueur: boolean,
  fruit: boolean,
  crunchy: boolean,
  molten: boolean,
  fondant: boolean,
  filled: boolean,
  nuts: boolean,
  available: boolean,
}

export const prdList: Array<Product> = [
  {
    idArticle: 1,
    titleArticle: "Rocher chocolat au coeur framboise",
    priceArticle: 12.5,
    ratingArticle: 4,
    textAltImg: "Photo de l'article",
    descriptionArticle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    ingredientsArticle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    urlImg: produit1,
    milk: true,
    white: false,
    black: false,
    caramel: true,
    liqueur: false,
    fruit: true,
    crunchy: true,
    molten: false,
    fondant: false,
    filled: true,
    nuts: true,
    available: true,
    category: categoriesList[Math.floor(Math.random() * categoriesList.length)].idCategory
  },
  {
    idArticle: 2,
    titleArticle: "Oeuf au chocolat fondant",
    priceArticle: 10,
    ratingArticle: 4.1,
    textAltImg: "Photo de l'article",
    descriptionArticle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    ingredientsArticle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    urlImg: produit2,
    milk: true,
    white: false,
    black: false,
    caramel: true,
    liqueur: false,
    fruit: false,
    crunchy: true,
    molten: true,
    fondant: false,
    filled: false,
    nuts: false,
    available: true,
    category: categoriesList[Math.floor(Math.random() * categoriesList.length)].idCategory
  },
  {
    idArticle: 3,
    titleArticle: "Secret liqueur de fraise",
    priceArticle: 10,
    ratingArticle: 4.8,
    textAltImg: "Photo de l'article",
    descriptionArticle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    ingredientsArticle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    urlImg: produit3,
    milk: true,
    white: false,
    black: false,
    caramel: false,
    liqueur: true,
    fruit: false,
    crunchy: true,
    molten: false,
    fondant: false,
    filled: true,
    nuts: false,
    available: false,
    category: categoriesList[Math.floor(Math.random() * categoriesList.length)].idCategory
  },
  {
    idArticle: 4,
    titleArticle: "Coeur pur",
    priceArticle: 10,
    ratingArticle: 3.8,
    textAltImg: "Photo de l'article",
    descriptionArticle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    ingredientsArticle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    urlImg: produit4,
    milk: true,
    white: true,
    black: false,
    caramel: false,
    liqueur: true,
    fruit: false,
    crunchy: false,
    molten: false,
    fondant: true,
    filled: true,
    nuts: false,
    available: false,
    category: categoriesList[Math.floor(Math.random() * categoriesList.length)].idCategory
  },
  {
    idArticle: 5,
    titleArticle: "Bouchées noisettes",
    priceArticle: 10,
    ratingArticle: 4.8,
    textAltImg: "Photo de l'article",
    descriptionArticle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    ingredientsArticle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    urlImg: produit5,
    milk: true,
    white: false,
    black: false,
    caramel: false,
    liqueur: true,
    fruit: true,
    crunchy: true,
    molten: true,
    fondant: true,
    filled: true,
    nuts: true,
    available: false,
    category: categoriesList[Math.floor(Math.random() * categoriesList.length)].idCategory

  },
  {
    idArticle: 6,
    titleArticle: "Marbré deux chocolats",
    priceArticle: 10,
    ratingArticle: 2.4,
    textAltImg: "Photo de l'article",
    descriptionArticle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    ingredientsArticle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    urlImg: produit6,
    milk: true,
    white: true,
    black: false,
    caramel: false,
    liqueur: false,
    fruit: false,
    crunchy: true,
    molten: false,
    fondant: true,
    filled: true,
    nuts: true,
    available: false,
    category: categoriesList[Math.floor(Math.random() * categoriesList.length)].idCategory
  },
  {
    idArticle: 7,
    titleArticle: "Secret molten chocofraise",
    priceArticle: 10,
    ratingArticle: 4.8,
    textAltImg: "Photo de l'article",
    descriptionArticle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    ingredientsArticle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    urlImg: produit7,
    milk: true,
    white: false,
    black: false,
    caramel: false,
    liqueur: true,
    fruit: true,
    crunchy: true,
    molten: true,
    fondant: true,
    filled: true,
    nuts: true,
    available: false,
    category: categoriesList[Math.floor(Math.random() * categoriesList.length)].idCategory
  },
  {
    idArticle: 8,
    titleArticle: "Lingot craquant",
    priceArticle: 10,
    ratingArticle: 4.8,
    textAltImg: "Photo de l'article",
    descriptionArticle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    ingredientsArticle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    urlImg: produit8,
    milk: false,
    white: false,
    black: true,
    caramel: false,
    liqueur: false,
    fruit: false,
    crunchy: true,
    molten: false,
    fondant: true,
    filled: true,
    nuts: false,
    available: false,
    category: categoriesList[Math.floor(Math.random() * categoriesList.length)].idCategory
  },
  {
    idArticle: 9,
    titleArticle: "Choco grafitti",
    priceArticle: 10,
    ratingArticle: 4.8,
    textAltImg: "Photo de l'article",
    descriptionArticle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    ingredientsArticle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    urlImg: produit9,
    milk: true,
    white: false,
    black: false,
    caramel: false,
    liqueur: false,
    fruit: false,
    crunchy: true,
    molten: false,
    fondant: true,
    filled: true,
    nuts: true,
    available: false,
    category: categoriesList[Math.floor(Math.random() * categoriesList.length)].idCategory
  },
  {
    idArticle: 10,
    titleArticle: "Caramelchoc",
    priceArticle: 10,
    ratingArticle: 4.8,
    textAltImg: "Photo de l'article",
    descriptionArticle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    ingredientsArticle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    urlImg: produit10,
    milk: true,
    white: false,
    black: false,
    caramel: true,
    liqueur: false,
    fruit: false,
    crunchy: false,
    molten: false,
    fondant: true,
    filled: true,
    nuts: false,
    available: false,
    category: categoriesList[Math.floor(Math.random() * categoriesList.length)].idCategory
  },
];
