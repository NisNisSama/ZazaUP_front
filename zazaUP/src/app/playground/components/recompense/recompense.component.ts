import { Component, OnInit } from '@angular/core';
import { RecompenseService } from '../../services/recompense.service';

@Component({
  selector: 'app-recompense',
  templateUrl: './recompense.component.html',
  styleUrls: ['./recompense.component.scss']
})
export class RecompenseComponent implements OnInit {

  constructor(
    private recompenseService: RecompenseService
  ) { }

  ngOnInit(): void {
    // this.recompenseService.requestAnimes().subscribe({
    //   next: res => console.log(res)
    // });
  }

}
