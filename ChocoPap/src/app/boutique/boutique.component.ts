import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
/* Import de ,Input, Output, EventEmitter, output  ... */
import { CommonModule } from '@angular/common';

import { ProduitComponent } from '../produit/produit.component';
import { EtoilesComponent } from '../etoiles/etoiles.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-boutique',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ProduitComponent, EtoilesComponent],
  templateUrl: './boutique.component.html',
  styleUrl: './boutique.component.css'
})

export class BoutiqueComponent implements OnInit{
  title = 'ChocoPap';
  liste : any;
  
  constructor (private dataService:DataService) { }

  ngOnInit(): void {
    this.liste = this.dataService.listeProduits
  }

}
