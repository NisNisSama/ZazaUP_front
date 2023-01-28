import { Component, OnInit } from '@angular/core';
import { AccueilService } from '../../services/accueil.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  
  constructor(
    private accueilService: AccueilService
  ) { }

  ngOnInit(): void {
    this.accueilService.getInfo().subscribe({
      next: res => console.log(res)
    });
  }

}
