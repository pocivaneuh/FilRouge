import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AccueilComponent } from './accueil/accueil.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { ProduitComponent } from './produit/produit.component';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, AccueilComponent, BoutiqueComponent, ProduitComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'ChocoPap';
  liste : any;
  
  ajoutPanier : number = 0;


  constructor (private dataService:DataService) {}

  ngOnInit(): void {
    this.liste = this.dataService.listeProduits
  }

}
