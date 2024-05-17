
import { Component, OnInit} from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

/* IMPORT DES COMPONENTS PERSONNALISES ET SERVICES */
import { DataService } from '../data.service';
import { CarousselComponent } from './caroussel/caroussel.component';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [RouterModule, RouterOutlet, CommonModule, CarousselComponent],
  providers:[DataService],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})

export class AccueilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}