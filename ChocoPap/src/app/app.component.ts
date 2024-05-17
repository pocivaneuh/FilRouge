import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/* IMPORT DES COMPONENT PERSONNALISES */
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './accueil/menu/menu.component';
import { FooterComponent } from './accueil/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AccueilComponent, MenuComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ChocoPap';
}
