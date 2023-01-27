import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EnfantsModel } from '../../models/enfants.model';
import { enfantsService } from '../../services/enfants.service';

@Component({
  selector: 'app-enfants',
  templateUrl: './enfants.component.html',
  styleUrls: ['./enfants.component.scss']
})
export class EnfantsComponent implements OnInit {
  enfants$!: Observable<EnfantsModel[]>;

  constructor(
    private enfantsService: enfantsService
  ) { }

  ngOnInit(): void {
    // this.enfants$ = this.enfantsService.getEnfants();
  }

}
