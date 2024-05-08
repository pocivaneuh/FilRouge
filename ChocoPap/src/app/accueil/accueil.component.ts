import { Component, OnInit,Input, Output, EventEmitter, output  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})

export class AccueilComponent {

  constructor() {}
  ngOnInit() :void {}
  
}
