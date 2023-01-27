import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CompetenceModel } from '../../models/competence.model';

@Component({
  selector: 'app-competence-item',
  templateUrl: './competence-item.component.html',
  styleUrls: ['./competence-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompetenceItemComponent implements OnInit {

  @Input() competence!: CompetenceModel;

  constructor() { }

  ngOnInit(): void {
  }

}
