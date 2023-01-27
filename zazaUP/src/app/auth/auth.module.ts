import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LogInComponent } from './components/log-in/log-in.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthService } from './services/auth.service';



@NgModule({
  declarations: [
    LogInComponent,
    ForgotPasswordComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    NgOptimizedImage
  ],
  providers: [
    AuthService,
    /* PromotionsResolver,
    FilieresResolver,
    DomaineCompetencesResolver,
    RegionsResolver,
    StatusProfessionnelsResolver */
  ]
})
export class AuthModule { }
