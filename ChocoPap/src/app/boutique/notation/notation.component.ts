import { Component, OnInit, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProduitComponent } from '../produit/produit.component';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-notation',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ProduitComponent],
  providers:[DataService],
  templateUrl: './notation.component.html',
  styleUrl: './notation.component.scss'
})
export class NotationComponent implements OnInit {
  @Input() note : number = 0;
  dataLow : number = 0 ;
  dataHigh : number = 0 ;

  showImage : boolean ;

  constructor() {
    this.showImage = false
  }

  ngOnInit() :void {

    if (Number.isInteger(this.note)) {
        this.dataLow = (this.note) - 0.5;
        this.dataHigh = this.note;
    } else {
        this.dataLow = Math.floor(this.note);
        this.dataHigh = Math.floor(this.note) + 0.5;
    }
  }


}