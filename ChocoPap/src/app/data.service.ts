import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  listeProduits = [
    {
      id: 1,
      titreArticle: "Rocher chocolat au coeur framboise",
      prixArticle : 12,
      noteArticle : 4.5,
      textAltImg : "Photo de l'article",
      descriptionArticle : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      ingredientsArticle : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      urlImg : "./assets/images/produit1.jpg",
      dispo : true
    },
    {
      id: 2,
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
      id: 3,
      titreArticle: "Art3",
      prixArticle : 10,
      noteArticle : 4.8,
      textAltImg : "Photo de l'article",
      descriptionArticle : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      ingredientsArticle : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      urlImg : "./assets/images/produit3.jpg",
      dispo : false
    }
  ]
  constructor() { }
  
  getProduit(id: number) {
    const produits = this.listeProduits.find((a) => {
        return a.id == id ;
    });
    return produits; 
  }

}
