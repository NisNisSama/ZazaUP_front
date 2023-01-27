import { Component, OnInit } from '@angular/core';
import { DecouverteService } from '../../services/decouverte.service';

@Component({
  selector: 'app-decouverte',
  templateUrl: './decouverte.component.html',
  styleUrls: ['./decouverte.component.scss']
})
export class DecouverteComponent implements OnInit {

  fact!: string;
  constructor(
    private decouverteService: DecouverteService
  ) { }

  ngOnInit(): void {
    this.decouverteService.requestDecouverte().subscribe({
      next: res => this.fact = res.body[0].fact
    })
  }

  onClick(){
    this.decouverteService.requestDecouverte().subscribe({
      next: res => this.fact = res.body[0].fact
    })
  }

}
