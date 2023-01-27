import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CreateEtudiantsModel } from '../../models/auth.model';
import { AuthService } from '../../services/auth.service';
import { phoneValidator } from '../../validators/tel.validator';
import { svg } from './svg';

declare var window: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup;
  nomCtrl!: FormControl;
  usernameCtrl!: FormControl;
  emailCtrl!: FormControl;
  telCtrl!: FormControl;
  passwordCtrl!: FormControl;
  
  phoneRegex: RegExp = /^(\+261|0)3(2|3|4|8) [0-9]{2} [0-9]{3} [0-9]{2}$/;
  loading!: boolean;

  titreToast!: string;
  iconePath1!: string;
  iconePath2!: string;
  messageToast!: string;

  signUpModal: any;

  eyePassword!: boolean;
  typepassword!: string;
  svglist!: {success: string[], error: string[]};

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.svglist = svg;
    this.eyePassword = false;
    this.typepassword = 'password';
    this.initFormCtrl();
    this.initFormGroup();
    this.signUpModal = new window.bootstrap.Modal('#signUpModal', {keyborde: false});
  }

  private initFormCtrl(): void {
    this.nomCtrl = this.formBuilder.control('', [Validators.required]);
    this.usernameCtrl = this.formBuilder.control('', [Validators.required]);
    this.emailCtrl = this.formBuilder.control('', [Validators.required, Validators.email]);
    this.telCtrl = this.formBuilder.control('', [Validators.required, phoneValidator(this.phoneRegex)]);
    this.passwordCtrl = this.formBuilder.control('', [Validators.required, Validators.minLength(11)]);
  }

  private initFormGroup(): void {
    this.signUpForm = this.formBuilder.group({
      nom: this.nomCtrl,
      username: this.usernameCtrl,
      email: this.emailCtrl,
      tel: this.telCtrl,
      password: this.passwordCtrl
    });
  }

  onSubmit(): void {
    let toast =  new window.bootstrap
      .Toast(document.querySelector('#toastCreateEtudiant'));
    const donnees: CreateEtudiantsModel = this.signUpForm.value as CreateEtudiantsModel;
    this.authService.signup(donnees).subscribe({
      next: () => {
        this.titreToast = 'Etudiant(e)';
        this.iconePath1 = this.svglist.success[0];
        this.iconePath2 = this.svglist.success[1];
        this.messageToast = 'Enregistrer avec succés!';
        toast.show();
        this.signUpModal.hide();
        this.onCloseModal();
      },
      error: response => {
        this.titreToast = 'Erreur';
        this.iconePath1 = this.svglist.error[0];
        this.iconePath2 = this.svglist.error[1];
        if(response.status === 403) {
          this.messageToast = 'Email déjà utilisé!';
        }
        else
          this.messageToast = `${response.error.message}: ${response.status}`;
        toast.show();
      }
    });
  }

  getFormControlErreur(ctlr: AbstractControl) {
    if(ctlr.hasError('required')) return 'Ce champs est requis!';
    else if(ctlr.hasError('phoneValidator')) return 'Veuillez entrer un n° de téléphone valide!';
    else if(ctlr.hasError('email')) return 'Veuillez entre un adresse email valide!';
    else if(ctlr.hasError('minlength')) return 'Veuillez entre plus de 11 caractères!';
    else return;
  }

  onShowEye(): void {
    this.eyePassword = !this.eyePassword;
    this.typepassword = this.eyePassword ? 'text': 'password';
  }

  onCloseModal(): void {
    this.signUpForm.reset();
  }
}
