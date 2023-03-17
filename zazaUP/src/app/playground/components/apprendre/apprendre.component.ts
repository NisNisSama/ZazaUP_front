import { Component, OnInit } from '@angular/core';
//import { ApprendreService } from '../../services/apprendre.service';

@Component({
  selector: 'app-apprendre',
  templateUrl: './apprendre.component.html',
  styleUrls: ['./apprendre.component.scss']
})
export class ApprendreComponent implements OnInit {
  labelModal!: string;
  description!: string;
  /* constructor(
    private apprendreService: ApprendreService
  ) { } */

  /* ngOnInit(): void {
    this.labelModal = "";
    this.description = "";
    this.apprendreService.requestDecouverte().subscribe({
      next: res => console.log(res) 
    });
  } */
  ngOnInit(): void{};

  onDisplay(data: {label: string, description: string}): void {
    this.labelModal = data.label;
    this.description = data.description;
  }
}
