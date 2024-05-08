import { Component, OnInit } from '@angular/core';
/* Import de ,Input, Output, EventEmitter, output  ... */
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule, RouterOutlet, CommonModule , NgbModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})

export class MenuComponent implements OnInit{
  pageAffichee: string = 'accueil';
  public isCollapsed: boolean = false;

  constructor() {}

  ngOnInit() :void {
  }

  
 
  onCollapse() {
    if (this.isCollapsed === true) {
      this.isCollapsed = false
    } else {
      this.isCollapsed = true
    }
  }
}
