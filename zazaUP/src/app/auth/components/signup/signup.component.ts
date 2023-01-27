import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateEtudiantsModel, DomaineCompetencesModel, 
  FilieresModel, PromotionsModel, RegionsModel, 
  StatusProfessionnelsModel } from '../../models/auth.model';
import { AuthService } from 'src/app/auth/services/auth.service';
import { svg } from './svg';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { phoneValidator } from '../../validators/tel.validator';

declare var window: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup;
  nomCtrl!: FormControl;
  prenomsCtrl!: FormControl;
  ecoleCtrl!: FormControl;
  niveau_etudeCtrl!: FormControl;
  tel1Ctrl!: FormControl;
  tel2Ctrl!: FormControl;
  emailCtrl!: FormControl;
  passwordCtrl!: FormControl;

  phoneRegex: RegExp = /^(\+261|0)3(2|3|4|8) [0-9]{2} [0-9]{3} [0-9]{2}$/;
  loading!: boolean;

  titreToast!: string;
  iconePath1!: string;
  iconePath2!: string;
  messageToast!: string;

  signUpModal: any;

  svglist!: {success: string[], error: string[]};

  promotions$!: Observable<PromotionsModel[]>;
  regions$!: Observable< RegionsModel[]>;
  domaineCompetences$!: Observable<DomaineCompetencesModel[]>;
  filieres$!: Observable<FilieresModel[]>;
  statusProfessionnels$!: Observable<StatusProfessionnelsModel[]>;

  eyePassword!: boolean;
  typepassword!: string;

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
    this.initSelectOptions();
    this.signUpModal = new window.bootstrap.Modal('#signUpModal', {keyborde: false});
  }

  private initFormCtrl(): void {
    this.nomCtrl = this.formBuilder.control('', [Validators.required]);
    this.prenomsCtrl = this.formBuilder.control('', [Validators.required]);
    this.ecoleCtrl = this.formBuilder.control('', [Validators.required]);
    this.niveau_etudeCtrl = this.formBuilder.control('', [Validators.required]);
    this.tel1Ctrl = this.formBuilder.control('', [Validators.required, phoneValidator(this.phoneRegex)]);
    this.tel2Ctrl = this.formBuilder.control('', phoneValidator(this.phoneRegex));
    this.emailCtrl = this.formBuilder.control('', [Validators.required, Validators.email]);
    this.passwordCtrl = this.formBuilder.control('', [Validators.required, Validators.minLength(11)]);
  }

  private initFormGroup(): void {
    this.nomCtrl.valueChanges.pipe(
      map((nom: string) => nom.toLowerCase())
    );

    this.signUpForm = this.formBuilder.group({
      nom: this.nomCtrl,
      prenoms: this.prenomsCtrl,
      ecole: this.ecoleCtrl,
      niveau_etude: this.niveau_etudeCtrl,
      tel1: this.tel1Ctrl,
      tel2: this.tel2Ctrl,
      email: this.emailCtrl,
      password: this.passwordCtrl,
      promotion_id: [null, [Validators.required, Validators.pattern(/[0-9]{1,2}/)]],
      region_id: [null, [Validators.required, Validators.pattern(/[0-9]{1,2}/)]],
      domaine_id: [null, [Validators.required, Validators.pattern(/[0-9]/)]],
      filiere_id: [null, [Validators.required, Validators.pattern(/[0-9]{1,}/)]],
      status_id: [null, [Validators.required, Validators.pattern(/[0-9]/)]]
    });
  }

  private initSelectOptions(): void {
    this.promotions$ = this.route.data.pipe(
      map(data => data['promotions'])
    );
    this.regions$ = this.route.data.pipe(
      map(data => data['regions'])
    );
    this.domaineCompetences$ = this.route.data.pipe(
      map(data => data['domaineCompetences'])
    );
    this.filieres$ = this.route.data.pipe(
      map(data => data['filieres'])
    );
    this.statusProfessionnels$ = this.route.data.pipe(
      map(data => data['statusProfessionnels'])
    );
  }

  onSubmit(): void {
    let toast =  new window.bootstrap
      .Toast(document.querySelector('#toastCreateEtudiant'));
    
    const donnees: CreateEtudiantsModel = this.signUpForm.value as CreateEtudiantsModel;
    this.authService.signUp(donnees).subscribe({
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
