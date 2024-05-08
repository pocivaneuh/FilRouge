
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AccueilComponent } from './accueil/accueil.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { ProduitComponent } from './produit/produit.component';
import { ProduitDetailsComponent } from './produit-details/produit-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path : '' , redirectTo: '/accueil', pathMatch: 'full'},
    { path: '' , component : AccueilComponent},
    { path : 'accueil' , component : AccueilComponent},
    { path : 'boutique' , component : BoutiqueComponent},
    { path : 'produit' , component : ProduitComponent},
    { path : 'produit/:id' , component : ProduitDetailsComponent},
    { path : '**' , component : PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {};