import { Component, OnInit,Input, Output, EventEmitter, output  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProduitComponent } from '../produit/produit.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-boutique',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ProduitComponent],
  templateUrl: './boutique.component.html',
  styleUrl: './boutique.component.css'
})

export class BoutiqueComponent implements OnInit{
  title = 'ChocoPap';
  liste : any;
  
  ajoutPanier : number = 0;


  constructor (private dataService:DataService) { }

  ngOnInit(): void {
    this.liste = this.dataService.listeProduits
  }

}
