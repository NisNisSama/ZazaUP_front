import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { AproposComponent } from './components/apropos/apropos.component';
import { CompetencesComponent } from './components/competences/competences.component';
import { DistinctionsComponent } from './components/distinctions/distinctions.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { FormationsComponent } from './components/formations/formations.component';
import { ProjetsComponent } from './components/projets/projets.component';

const routes: Routes = [
  {
    path: '', 
    component: BodyComponent,
    children: [
      {path: 'apropos', component: AproposComponent},
      {path: 'competences', component: CompetencesComponent},
      {path: 'distinctions', component: DistinctionsComponent},
      {path: 'experiences', component: ExperiencesComponent},
      {path: 'formations', component: FormationsComponent},
      {path: 'projets', component: ProjetsComponent},
      {path: '', redirectTo: 'apropos', pathMatch: 'prefix'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantsRoutingModule { }
