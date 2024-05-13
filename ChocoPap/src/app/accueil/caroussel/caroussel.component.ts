import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

/* IMPORT DES COMPONENTS PERSONNALISES ET SERVICES */
import { AccueilComponent } from '../accueil.component';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-caroussel',
  standalone: true,
  imports: [RouterModule, RouterOutlet, CommonModule, AccueilComponent],
  providers:[DataService],
  templateUrl: './caroussel.component.html',
  styleUrl: './caroussel.component.scss'
})

export class CarousselComponent implements OnInit {
    idSlide : number = 1 ;
    urlImgSlide! : string ;
    textAltImgSlide! : string;

  constructor(
      private dataService: DataService,
  ) {}

  ngOnInit() {
    
    let id = this.idSlide ?? 1 ;
    this.urlImgSlide = this.dataService.getSlide(id)?.urlImgSlide ?? "./assets/images/accueil1.jpg";
    this.textAltImgSlide = this.dataService.getSlide(id)?.textAltImgSlide ?? "Banquet de pâtisseries";
  }

  onPrev(){
    if (this.idSlide > 1){
      this.idSlide--
    } else {
      this.idSlide = 3
    }
    this.urlImgSlide = this.dataService.getSlide(this.idSlide)?.urlImgSlide ?? "./assets/images/accueil1.jpg";
    this.textAltImgSlide = this.dataService.getSlide(this.idSlide)?.textAltImgSlide ?? "Banquet de pâtisseries";
  }

  onNext(){
    if (this.idSlide < 3){
      this.idSlide++
    } else {
      this.idSlide = 1
    }
    this.urlImgSlide = this.dataService.getSlide(this.idSlide)?.urlImgSlide ?? "./assets/images/accueil1.jpg";
    this.textAltImgSlide = this.dataService.getSlide(this.idSlide)?.textAltImgSlide ?? "Banquet de pâtisseries";
  }

  onSelect(id:number)
  {
    this.idSlide = id ;
    this.urlImgSlide = this.dataService.getSlide(id)?.urlImgSlide ?? "./assets/images/accueil1.jpg";
    this.textAltImgSlide = this.dataService.getSlide(id)?.textAltImgSlide ?? "Banquet de pâtisseries";
  }
}

