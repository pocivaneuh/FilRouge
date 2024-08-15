
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AccueilComponent } from './accueil/accueil.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PanierComponent } from './boutique/panier/panier.component';

export const routes: Routes = [
    { path: '' , component : AccueilComponent},
    { path : 'accueil',
        loadComponent: () => import('./accueil/accueil.component').then(c => c.AccueilComponent)
    },
    { path : 'boutique' , component : BoutiqueComponent},
    { path : 'produit',
        loadComponent: () => import('./boutique/produit/produit.component').then(c => c.ProduitComponent)
    },
    { path : 'produit/:id',
        loadComponent: () => import('./boutique/produit/produit-details/produit-details.component').then(c => c.ProduitDetailsComponent)
    },
    { path : 'panier' , component : PanierComponent},
    { path : '**' , component : PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {};