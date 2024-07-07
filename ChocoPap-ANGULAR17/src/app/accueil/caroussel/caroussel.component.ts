import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

/* IMPORT DES COMPONENTS PERSONNALISES ET SERVICES */
import { AccueilComponent } from '../accueil.component';
import { NavcarouselComponent } from './navcarousel/navcarousel.component';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-caroussel',
  standalone: true,
  imports: [RouterModule, RouterOutlet, CommonModule, AccueilComponent, NavcarouselComponent],
  providers:[DataService],
  templateUrl: './caroussel.component.html',
  styleUrl: './caroussel.component.scss'
})

export class CarousselComponent implements OnInit {
    idSlide : number = 1 ;
    urlImgSlide! : string ;
    textAltImgSlide! : string;

    slideAffiche(id : number): void {
      this.idSlide = id; 
      this.urlImgSlide = this.dataService.getSlide(id)?.urlImgSlide ?? "./assets/images/accueil1.jpg";
      this.textAltImgSlide = this.dataService.getSlide(id)?.textAltImgSlide ?? "Banquet de pâtisseries";
    }

    constructor(
      private dataService: DataService,
  ) {}


  ngOnInit(idInit : number = 1): void {  
    this.idSlide = idInit ;  
    this.urlImgSlide = this.dataService.getSlide(idInit)?.urlImgSlide ?? "./assets/images/accueil1.jpg";
    this.textAltImgSlide = this.dataService.getSlide(idInit)?.textAltImgSlide ?? "Banquet de pâtisseries";
  }

}