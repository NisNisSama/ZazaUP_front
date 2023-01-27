import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { BodyComponent } from './components/body/body.component';
import { DiscussionsComponent } from './components/discussions/discussions.component';
import { EnfantsComponent } from './components/enfants/enfants.component';

const routes: Routes = [
  { 
    path: '',
    component: BodyComponent,
    children: [
      { path: 'accueil', component: AccueilComponent },
      { path: 'enfants', component: EnfantsComponent },
      { path: 'discussions', component: DiscussionsComponent },
      { path: '', redirectTo: 'enfants', pathMatch: 'prefix' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentsRoutingModule { }
