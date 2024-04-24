import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProduitComponent } from '../produit/produit.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-produit-details',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ProduitComponent],
  templateUrl: './produit-details.component.html',
  styleUrl: './produit-details.component.css'
})

export class ProduitDetailsComponent implements OnInit{
    id : number = 1;
    titre : string = "";
    prix : number = 0;
    note : number = 0;
    description : string = "";
    ingredients : string = "";
    urlImg : string = "" ;
    textAltImg : string = "";
    dispo : boolean = false;

    constructor(
      private route: ActivatedRoute,
      private dataService: DataService,
    ) { }

    ngOnInit() {
      const id = this.route.snapshot.params['id'];
      this.id = id;
      this.titre = this.dataService.getProduit(id).titreArticle;
      this.prix = this.dataService.getProduit(id).prixArticle;
      this.description = this.dataService.getProduit(id).descriptionArticle;
      this.ingredients = this.dataService.getProduit(id).ingredientsArticle;
      this.urlImg = this.dataService.getProduit(id).urlImg;
      this.textAltImg = this.dataService.getProduit(id).textAltImg;
      this.dispo = this.dataService.getProduit(id).dispo;
    }
}