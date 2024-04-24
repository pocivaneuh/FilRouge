import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { ProduitComponent } from './produit/produit.component';
import { DataService } from './data.service';
import { ProduitDetailsComponent } from './produit-details/produit-details.component';

NgModule({
    declarations: [
        AppComponent,
        AccueilComponent,
        BoutiqueComponent,
        ProduitComponent,
        ProduitDetailsComponent
    ],
    imports : [
        BrowserModule,
        FormsModule,
    ],
    
    providers : [DataService],
    bootstrap: [AppComponent]
})
export class AppModule {}