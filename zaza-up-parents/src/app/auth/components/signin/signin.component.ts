import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/core/services/session.service';
import { AuthModel } from '../../models/auth.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  logInForm!: FormGroup;
  responseErreur!: string;
  unauthorized!: boolean;
  typeInput!: string;
  checkboxLabel!: string;
  loading!:boolean;
  
  constructor(
    private authService: AuthService,
    private sessionService: SessionService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.sessionService.isLoggedIn() && this.router.navigateByUrl('/zaza-up-parents');
    
    this.unauthorized = false;
    this.typeInput = 'password';
    this.checkboxLabel = 'afficher';
    this.loading = false;

    this.logInForm = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  onShowPassword(event: any): void {
    [this.typeInput, this.checkboxLabel] = event.target.checked 
      ? ['text', 'cacher'] : ['password', 'afficher']
  }

  onSubmit(): void {
    this.loading = true;
    const donnees: AuthModel = this.logInForm.value as AuthModel;
    this.authService.logIn(donnees).subscribe({
      next: response => {
        this.sessionService.setToken(response.access, response.id);
        this.router.navigateByUrl('/parents');
        this.loading = false;
      },
      error: response => {
        this.loading = false;
        this.unauthorized = true;
        if(response.status === 401)
          this.responseErreur = `Identifiant et/ou mot de passe invalides!`;
        else if(response.status === 406)
          this.responseErreur = `Données invalides!`;
        else
          this.responseErreur = `Une erreur s'est produit...\n${response.error.message}: ${response.status}`;
      }
    });
  }

}
