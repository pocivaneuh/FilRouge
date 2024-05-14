import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProduitComponent } from '../produit.component';
import { NotationComponent } from '../../notation/notation.component';
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
    titre! : string;
    prix! : number;
    noteArticle! : number;
    description! : string;
    ingredients! : string;
    urlImg! : string;
    textAltImg! : string;
    dispo! : boolean;

    ajoutPanier : number = 0;
    nbArticles : number = 0 ;

    constructor(
      private route: ActivatedRoute,
      private dataService: DataService,
      
    ) { }

    ngOnInit() {

      const id = this.route.snapshot.params['id'];
      this.idProduit = id;
      this.titre = this.dataService.getProduit(id)?.titreArticle ?? 'Default Name';
      this.prix = this.dataService.getProduit(id)?.prixArticle ?? 0;
      this.description = this.dataService.getProduit(id)?.descriptionArticle ?? 'Default Name';
      this.noteArticle = this.dataService.getProduit(id)?.noteArticle ?? 0;
      this.description = this.dataService.getProduit(id)?.descriptionArticle ?? 'Default Name';
      this.ingredients = this.dataService.getProduit(id)?.ingredientsArticle ?? 'Default Name';
      this.urlImg = this.dataService.getProduit(id)?.urlImg ?? 'Default Name';
      this.textAltImg = this.dataService.getProduit(id)?.textAltImg ?? 'Default Name';
      this.dispo = this.dataService.getProduit(id)?.dispo ?? false ;
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

    onAjouter(nbArticles : number){
      this.ajoutPanier++;
    }
}