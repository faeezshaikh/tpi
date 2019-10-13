import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'decks', pathMatch: 'full' },
  // { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'decks', loadChildren: './decks/decks.module#DecksPageModule' },
  { path: 'card-details', loadChildren: './card-details/card-details.module#CardDetailsPageModule' },
  { path: 'decks/:id', loadChildren: './cards/cards.module#CardsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
