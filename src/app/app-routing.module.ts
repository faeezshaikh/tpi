import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'decks', pathMatch: 'full' },
  // { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'decks', loadChildren: './decks/decks.module#DecksPageModule' , canActivate: [AuthGuardService] },
  { path: 'card-details', loadChildren: './card-details/card-details.module#CardDetailsPageModule' , canActivate: [AuthGuardService] },
  { path: 'decks/:id', loadChildren: './cards/cards.module#CardsPageModule', canActivate: [AuthGuardService]  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
