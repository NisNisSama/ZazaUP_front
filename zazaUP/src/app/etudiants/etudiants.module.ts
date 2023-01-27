import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { EtudiantsRoutingModule } from './etudiants-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { BodyComponent } from './components/body/body.component';
import { AproposComponent } from './components/apropos/apropos.component';
import { CompetencesComponent } from './components/competences/competences.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { FormationsComponent } from './components/formations/formations.component';
import { DistinctionsComponent } from './components/distinctions/distinctions.component';
import { ProjetsComponent } from './components/projets/projets.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/header/header.component';

import { FormationItemComponent } from './components/formation-item/formation-item.component';
import { CompetenceItemComponent } from './components/competence-item/competence-item.component';
import { DistinctionItemComponent } from './components/distinction-item/distinction-item.component';
import { ExperienceItemComponent } from './components/experience-item/experience-item.component';
import { ProjetItemComponent } from './components/projet-item/projet-item.component';

import { AproposService } from './services/apropos.service';
import { CompetencesService } from './services/competence.service';
import { DistinctionsService } from './services/distinction.service';
import { ExperiencesService } from './services/experience.service';
import { FormationsService } from './services/formation.service';
import { ProjectsService } from './services/projets.service';


@NgModule({
  declarations: [
    BodyComponent,
    AproposComponent,
    CompetencesComponent,
    ExperiencesComponent,
    FormationsComponent,
    DistinctionsComponent,
    ProjetsComponent,
    SidenavComponent,
    HeaderComponent,
    FormationItemComponent,
    CompetenceItemComponent,
    DistinctionItemComponent,
    ExperienceItemComponent,
    ProjetItemComponent
  ],
  imports: [
    CommonModule,
    EtudiantsRoutingModule,
    ReactiveFormsModule,
    NgOptimizedImage
  ],
  providers: [
    AproposService,
    CompetencesService,
    DistinctionsService,
    ExperiencesService,
    FormationsService,
    ProjectsService
  ]
})
export class EtudiantsModule { }
