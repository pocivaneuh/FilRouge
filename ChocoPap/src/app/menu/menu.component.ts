import { Component, OnInit } from '@angular/core';
/* Import de ,Input, Output, EventEmitter, output  ... */
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule , NgbModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})

export class MenuComponent implements OnInit{
  pageAffichee: string = 'accueil';
  public isCollapsed: boolean = false;

  constructor() {}

  ngOnInit() :void {
  }

  onAccueil() {
    this.pageAffichee ='accueil';
  }
  onBoutique() {
    this.pageAffichee = 'boutique';
  }
  onPanier() {
    this.pageAffichee = 'panier';
  }
 
  onCollapse() {
    if (this.isCollapsed === true) {
      this.isCollapsed = false
    } else {
      this.isCollapsed = true
    }
  }
}
