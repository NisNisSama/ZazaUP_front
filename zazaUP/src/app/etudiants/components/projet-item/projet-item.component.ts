import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ProjetModel } from '../../models/projet.model';

@Component({
  selector: 'app-projet-item',
  templateUrl: './projet-item.component.html',
  styleUrls: ['./projet-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjetItemComponent implements OnInit {

  @Input() projet!: ProjetModel;

  constructor() { }

  ngOnInit(): void {
  }

}
