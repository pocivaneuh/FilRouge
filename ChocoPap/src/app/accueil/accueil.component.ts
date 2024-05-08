import { Component, OnInit,Input, Output, EventEmitter, output  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

import { DataService } from '../data.service';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NgbCarousel],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})

export class AccueilComponent implements OnInit {
  @Input() src : string  = './assets/images/accueil1.jpg' ;
  @Input() alt: string = "Banquet de pâtisseries";
  
  constructor() {}
  ngOnInit() :void {}
  
}
