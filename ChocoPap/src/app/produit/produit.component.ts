import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProduitDetailsComponent } from '../produit-details/produit-details.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ProduitDetailsComponent],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})

export class ProduitComponent implements OnInit {
    @Input() idProduit: number = 1 ;
    @Input() titreArticle: string = "Article1";
    @Input() prixArticle : number = 0;
    @Input() noteArticle : number = 0;
    @Input() description : string = "Image de l'article";
    @Input() ingredients : string = "";
    @Input() urlImg : string ="./assets/images/accueil1.jpg";
    @Input() textAltImg : string ="";
    @Input() dispo : boolean = false;


    constructor() {}
    ngOnInit() :void {}

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

}
