import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';

import { ProduitComponent } from '../produit.component';
import { NotationComponent } from '../notation/notation.component';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-produit-details',
  standalone: true,
  imports: [RouterModule, RouterOutlet, CommonModule, ProduitComponent, NotationComponent],
  providers:[DataService],
  templateUrl: './produit-details.component.html',
  styleUrl: './produit-details.component.scss'
})

export class ProduitDetailsComponent implements OnInit{
    idProduit! : number;
    titreDetail! : string;
    prixDetail! : number;
    noteArticle! : number;
    description! : string;
    ingredients! : string;
    urlImg! : string;
    textAltImg! : string;
    choco! : string;
    caramel!: boolean;
    liqueur! : boolean;
    fruit! : boolean;
    croquant! : boolean;
    coulant! : boolean;
    fondant! : boolean;
    fourre! : boolean;
    noixNoisette! : boolean;
    dispo! : boolean;

    page : number = 1;

    ajoutPanier : number = 0;
    nbArticles : number = 0 ;
    articleToAdd : number = 0;

    constructor(
      private route: ActivatedRoute,
      private dataService: DataService,
      
    ) { }

    ngOnInit() {

      const id = this.route.snapshot.params['id'];
      this.idProduit = id;
      this.titreDetail = this.dataService.getProduit(id)?.titreArticle ?? 'Default Name';
      this.prixDetail = this.dataService.getProduit(id)?.prixArticle ?? 0;
      this.description = this.dataService.getProduit(id)?.descriptionArticle ?? 'Default Name';
      this.noteArticle = this.dataService.getProduit(id)?.noteArticle ?? 0;
      this.description = this.dataService.getProduit(id)?.descriptionArticle ?? 'Default Name';
      this.ingredients = this.dataService.getProduit(id)?.ingredientsArticle ?? 'Default Name';
      this.urlImg = this.dataService.getProduit(id)?.urlImg ?? 'Default Name';
      this.textAltImg = this.dataService.getProduit(id)?.textAltImg ?? 'Default Name';
      this.choco = this.dataService.getProduit(id)?.choco ?? "lait";
      this.caramel = this.dataService.getProduit(id)?.caramel ?? false;
      this.liqueur = this.dataService.getProduit(id)?.liqueur ?? false;
      this.fruit = this.dataService.getProduit(id)?.fruit ?? false;
      this.croquant = this.dataService.getProduit(id)?.croquant ?? false;
      this.coulant = this.dataService.getProduit(id)?.coulant ?? false;
      this.fondant = this.dataService.getProduit(id)?.fondant ?? false;
      this.fourre  = this.dataService.getProduit(id)?.fourre ?? false;
      this.noixNoisette = this.dataService.getProduit(id)?.noixNoisette ?? false;
      this.dispo = this.dataService.getProduit(id)?.dispo ?? false ;
    }
   
    onNextPage() {
      this.page === 2;
    }

    onPrevPage() {
      this.page === 1;
    }

    getDispo(){
      if (this.dispo === true) {
        return "100%"
      } else {
        return "10%"
      }
    }

    getDispoBtn(){
      if (this.dispo === true) {
        return "true"
      } else {
        return "false"
      }
    }

    onAjouter(form : NgForm){
      const newNumber = this.articleToAdd;
      console.log("newNumber :" + newNumber) ;
    }

}