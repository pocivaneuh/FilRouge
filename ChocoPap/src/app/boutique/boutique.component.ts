import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
/* Import de ,Input, Output, EventEmitter, output  ... */
import { CommonModule } from '@angular/common';

/* IMPORT DES COMPONENTS PERSONNALISES A AJOUTER DANS IMPORTS */
import { ProduitComponent } from './produit/produit.component';
import { NotationComponent } from './produit/notation/notation.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-boutique',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ProduitComponent, NotationComponent],
  providers:[DataService],
  templateUrl: './boutique.component.html',
  styleUrl: './boutique.component.scss'
})
export class BoutiqueComponent implements OnInit{

  liste : any;
  
  constructor (private dataService:DataService) { }

  ngOnInit(): void {
    this.liste = this.dataService.listeProduits
  }

}
