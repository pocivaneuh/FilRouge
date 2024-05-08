import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProduitComponent } from '../produit/produit.component';
import { EtoilesComponent } from '../etoiles/etoiles.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-produit-details',
  standalone: true,
  imports: [RouterModule, RouterOutlet, CommonModule, ProduitComponent, EtoilesComponent],
  templateUrl: './produit-details.component.html',
  styleUrl: './produit-details.component.css'
})

export class ProduitDetailsComponent implements OnInit{
    idProduit! : number;
    titre! : string;
    prix! : number;
    note! : number;
    description! : string;
    ingredients! : string;
    urlImg! : string;
    textAltImg! : string;
    dispo! : boolean;

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
      this.ingredients = this.dataService.getProduit(id)?.ingredientsArticle ?? 'Default Name';
      this.urlImg = this.dataService.getProduit(id)?.urlImg ?? 'Default Name';
      this.textAltImg = this.dataService.getProduit(id)?.textAltImg ?? 'Default Name';
      this.dispo = this.dataService.getProduit(id)?.dispo ?? false ;
    }
}