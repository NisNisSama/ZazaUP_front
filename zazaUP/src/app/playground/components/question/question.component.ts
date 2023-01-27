import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  questionCtrl!: FormControl;
  response!: string;
  loading!: boolean;

  constructor(
    private questionService: QuestionService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loading = false;
    this.questionCtrl = this.formBuilder.control('', [Validators.required]);
  }

  onSend(): void {
    const donnees = this.questionCtrl.value as string;
    if(donnees) {
      this.loading = true;
      this.questionService.requestCompletion(donnees).subscribe({
        next: res => {
          this.response = (res.body.choices[0].text as string).split('\\n').join('');
          this.loading = false;
          this.questionCtrl.reset();
        },
        error: (err) => console.log(err)
      });
    }
  }

}
