import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { DistinctionModel } from '../../models/distinction.model';

@Component({
  selector: 'app-distinction-item',
  templateUrl: './distinction-item.component.html',
  styleUrls: ['./distinction-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DistinctionItemComponent implements OnInit {

  @Input() distinction!: DistinctionModel;

  constructor() { }

  ngOnInit(): void {
  }

}
