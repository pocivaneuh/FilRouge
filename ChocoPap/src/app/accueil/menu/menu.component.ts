import { Component, OnInit } from '@angular/core';
/* Import de ,Input, Output ... */
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet, NavigationEnd } from '@angular/router';

import { DataService } from '../../data.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule, RouterOutlet, CommonModule],
  providers:[DataService],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})

export class MenuComponent implements OnInit{
    pageAffichee: string = 'accueil';
    colapse : boolean = false ; 
  
    constructor(private router:Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.pageAffichee = this.router.url;
      }
    });
  }
    ngOnInit() :void {
    }

    onColapse()
    {
      this.colapse= !this.colapse ;
    }
  }