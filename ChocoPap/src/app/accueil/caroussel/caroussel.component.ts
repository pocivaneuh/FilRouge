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
    idSlide! : number ;
    urlImgSlide! : string ;
    textAltImgSlide! : string;
    slideAffiche : number = 1;
    slidesLst : any;

  constructor(
      private dataService: DataService,
  ) {}

  ngOnInit() {
    
    this.slidesLst = this.dataService.listeSlides
    const id = this.slideAffiche;
    this.idSlide = id;
    this.urlImgSlide = this.dataService.getSlide(this.idSlide)?.textAltImgSlide ?? "./assets/images/accueil1.jpg";
    this.textAltImgSlide = this.dataService.getSlide(this.idSlide)?.textAltImgSlide ?? "Banquet de pâtisseries";
  }

  onPrev(){
    if (this.idSlide > 1){
      this.idSlide--
    } else {
      this.idSlide = 3
    }
  }

  onNext(){
    if (this.idSlide < 3){
      this.idSlide++
    } else {
      this.idSlide = 1
    }
  }

  onSelect(id:number)
  {
    this.idSlide = id ; 
  }
}

