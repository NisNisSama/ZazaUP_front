import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ParentsRoutingModule } from './parents-routing.module';
import { BodyComponent } from './components/body/body.component';
import { EnfantsComponent } from './components/enfants/enfants.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { enfantsService } from './services/enfants.service';
import { DiscussionsComponent } from './components/discussions/discussions.component';


@NgModule({
  declarations: [
    BodyComponent,
    EnfantsComponent,
    AccueilComponent,
    SidenavComponent,
    HeaderComponent,
    DiscussionsComponent
  ],
  imports: [
    CommonModule,
    ParentsRoutingModule,
    ReactiveFormsModule,
    NgOptimizedImage
  ],
  providers: [
    enfantsService
  ]
})
export class ParentsModule { }
