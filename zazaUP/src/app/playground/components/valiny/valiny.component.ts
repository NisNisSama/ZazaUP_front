import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValinyService } from '../../services/valiny.service';
declare var window: any;

@Component({
  selector: 'app-valiny',
  templateUrl: './valiny.component.html',
  styleUrls: ['./valiny.component.scss']
})
export class ValinyComponent implements OnInit {
  questions!: string;
  valiny!: {text: string, is_correct: boolean}[];
  modalShow: any;
  modalErreur: any;

  constructor(
    private router: Router,
    private valinyService: ValinyService
    ) { }

  ngOnInit(): void {
    this.modalShow = new window.bootstrap.Modal('#exampleModal');
    this.modalErreur = new window.bootstrap.Modal('#exampleModalErreur');
    this.valinyService.requestDecouverte().subscribe({
      next: res => {
        this.questions = res[0].text;
        this.valiny = res[0].answers;
        console.log(res);
        
      }
    });
  }

  onClick(){
    this.router.navigateByUrl('/bienvenue/valiny');
  }

  onVerify(is_correct: boolean): void {
    if(is_correct) {
      this.modalShow.show();
      this.router.navigateByUrl('/bienvenue/quizz');
    } else {
      this.modalErreur.show();
    }
  }
}
