import { Component, OnInit, Input, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DataService } from '../../data.service';

@Component({
  selector: 'app-notation',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  providers:[DataService],
  templateUrl: './notation.component.html',
  styleUrl: './notation.component.scss'
})
export class NotationComponent implements OnInit {
  constructor() {}

  ngOnInit() :void {
  }

}