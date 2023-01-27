import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ExperienceModel } from '../../models/experience.model';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceItemComponent implements OnInit {

  @Input() experience!: ExperienceModel;

  constructor() { }

  ngOnInit(): void {
  }

}
