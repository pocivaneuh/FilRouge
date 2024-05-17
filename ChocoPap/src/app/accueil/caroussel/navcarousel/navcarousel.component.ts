import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

/* IMPORT DES COMPONENTS PERSONNALISES ET SERVICES */
import { CarousselComponent } from '../caroussel.component';
import { DataService } from '../../../data.service';


@Component({
  selector: 'app-navcarousel',
  standalone: true,
  imports: [RouterModule, RouterOutlet, CommonModule, CarousselComponent],
  providers:[DataService],
  templateUrl: './navcarousel.component.html',
  styleUrl: './navcarousel.component.scss'
})


export class NavcarouselComponent {
    @Input () idSlideCarousel : number = 1;
    @Output () idSlideNav = new EventEmitter<number>() ;

  onPrev(){
    if (this.idSlideCarousel > 1){
      this.idSlideCarousel--
      this.idSlideNav.emit(this.idSlideCarousel)
    } else {
      this.idSlideCarousel = 3
      this.idSlideNav.emit(this.idSlideCarousel)
    }
  }

  onNext(){
    if (this.idSlideCarousel < 3){
      this.idSlideCarousel++
      this.idSlideNav.emit(this.idSlideCarousel)
    } else {
      this.idSlideCarousel = 1
      this.idSlideNav.emit(this.idSlideCarousel)
    }
  }

  onSelect(id:number)
  {
    this.idSlideCarousel = id ;
    this.idSlideNav.emit(this.idSlideCarousel)
  }
  
  sendIdSlide(){
    this.idSlideNav.emit(this.idSlideCarousel)
  }

}