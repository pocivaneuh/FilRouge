import { Component, OnInit, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DataService } from '../data.service';

@Component({
  selector: 'app-etoiles',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './etoiles.component.html',
  styleUrl: './etoiles.component.css'
})

export class EtoilesComponent implements OnInit {
    constructor() {}

    ngOnInit() :void {
    }

}