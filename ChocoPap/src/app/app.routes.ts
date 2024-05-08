
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AccueilComponent } from './accueil/accueil.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { ProduitComponent } from './produit/produit.component';
import { ProduitDetailsComponent } from './produit-details/produit-details.component';

export const routes: Routes = [
    {path : "", component : AccueilComponent},
    {path : "accueil", component : AccueilComponent},
    {path : "boutique", component : BoutiqueComponent},
    {path : "produit", component : ProduitComponent},
    {path : "produit/:id", component : ProduitDetailsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {};