import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
/* import { PromotionsResolver } from './resolvers/promotions.resolver';
import { RegionsResolver } from './resolvers/regions.resolver';
import { DomaineCompetencesResolver } from './resolvers/domaine-competences.resolver';
import { FilieresResolver } from './resolvers/filieres.resolver';
import { StatusProfessionnelsResolver } from './resolvers/status-professionnels.resolver'; */

const routes: Routes = [
  {
    path: '', 
    component: LogInComponent,
    /* resolve: {
      promotions: PromotionsResolver,
      regions: RegionsResolver,
      domaineCompetences: DomaineCompetencesResolver,
      filieres: FilieresResolver,
      statusProfessionnels: StatusProfessionnelsResolver
    } */
  },
  {path: 'forgot-password', component: ForgotPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
