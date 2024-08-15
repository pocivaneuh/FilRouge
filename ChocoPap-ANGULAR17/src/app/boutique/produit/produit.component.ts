import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';

import { ProduitDetailsComponent } from './produit-details/produit-details.component';
import { NotationComponent } from './notation/notation.component';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [RouterModule, RouterOutlet, CommonModule, ProduitDetailsComponent, NotationComponent],
  providers:[DataService],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.scss'
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
    @Input() lait : boolean = false;
    @Input() blanc : boolean = false;
    @Input() noir : boolean = false;
    @Input() caramel : boolean = false;
    @Input() liqueur : boolean = false;
    @Input() fruit : boolean = false;
    @Input() croquant : boolean = false;
    @Input() coulant : boolean = false;
    @Input() fondant : boolean = false;
    @Input() fourre : boolean = false;
    @Input() noixNoisette : boolean = false;
    articleToAdd : number = 0;

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

    onAjouter(form : NgForm){
      const newNumber = this.articleToAdd;
      console.log("newNumber :" + newNumber) ;
    }

}
