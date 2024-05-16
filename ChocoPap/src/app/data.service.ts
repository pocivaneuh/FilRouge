import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  public listeSlides = [
    { 
      idSlide : 1,
      urlImgSlide: "./assets/images/accueil1.jpg",
      textAltImgSlide : "Banquet de pâtisseries"
     },
    { 
      idSlide : 2,
      urlImgSlide: "./assets/images/accueil2.jpg",
      textAltImgSlide : "Méli-mélo de bonbons"
     },
    { 
      idSlide : 3,
      urlImgSlide: "./assets/images/accueil3.jpg",
      textAltImgSlide : "Chocolats bien ordonnées" 
    }
  ];

  public listeProduits = [
    {
      idProduit: 1,
      titreArticle: "Rocher chocolat au coeur framboise",
      prixArticle : 12.5,
      noteArticle : 4,
      textAltImg : "Photo de l'article",
      descriptionArticle : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      ingredientsArticle : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      urlImg : "./assets/images/produit1.jpg",
      dispo : true
    },
    {
      idProduit: 2,
      titreArticle: "Oeuf au chocolat fondant",
      prixArticle : 10,
      noteArticle : 4.1,
      textAltImg : "Photo de l'article",
      descriptionArticle : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      ingredientsArticle : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      urlImg : "./assets/images/produit2.jpg",
      dispo : true
    },
    {
      idProduit: 3,
      titreArticle: "Secret liqueur de fraise",
      prixArticle : 10,
      noteArticle : 4.8,
      textAltImg : "Photo de l'article",
      descriptionArticle : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      ingredientsArticle : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      urlImg : "./assets/images/produit3.jpg",
      dispo : false
    },
    {
      idProduit: 4,
      titreArticle: "Coeur pur",
      prixArticle : 10,
      noteArticle : 3.8,
      textAltImg : "Photo de l'article",
      descriptionArticle : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      ingredientsArticle : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      urlImg : "./assets/images/produit4.jpg",
      dispo : false
    },
    {
      idProduit: 5,
      titreArticle: "Bouchées noisettes",
      prixArticle : 10,
      noteArticle : 4.8,
      textAltImg : "Photo de l'article",
      descriptionArticle : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      ingredientsArticle : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      urlImg : "./assets/images/produit5.jpg",
      dispo : false
    },
    {
      idProduit: 6,
      titreArticle: "Marbré deux chocolats",
      prixArticle : 10,
      noteArticle : 2.4,
      textAltImg : "Photo de l'article",
      descriptionArticle : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      ingredientsArticle : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      urlImg : "./assets/images/produit6.jpg",
      dispo : false
    },
    {
      idProduit: 7,
      titreArticle: "Secret coulant chocofraise",
      prixArticle : 10,
      noteArticle : 4.8,
      textAltImg : "Photo de l'article",
      descriptionArticle : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      ingredientsArticle : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      urlImg : "./assets/images/produit7.jpg",
      dispo : false
    },
    {
      idProduit: 8,
      titreArticle: "Lingot craquant",
      prixArticle : 10,
      noteArticle : 4.8,
      textAltImg : "Photo de l'article",
      descriptionArticle : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      ingredientsArticle : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      urlImg : "./assets/images/produit8.jpg",
      dispo : false
    },
    {
      idProduit: 9,
      titreArticle: "Choco grafitti",
      prixArticle : 10,
      noteArticle : 4.8,
      textAltImg : "Photo de l'article",
      descriptionArticle : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      ingredientsArticle : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      urlImg : "./assets/images/produit9.jpg",
      dispo : false
    },
    {
      idProduit: 10,
      titreArticle: "Caramelchoc",
      prixArticle : 10,
      noteArticle : 4.8,
      textAltImg : "Photo de l'article",
      descriptionArticle : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      ingredientsArticle : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      urlImg : "./assets/images/produit10.jpg",
      dispo : false
    },
  ]

  constructor() { }
  
  getProduit(id: number) {
    const produits = this.listeProduits.find((a) => {
        return a.idProduit == id ;
    });
    return produits; 
  }

  getSlide(id: number) {
    const slides = this.listeSlides.find((a) => {
        return a.idSlide == id ;
    });
    return slides; 
  }
}
