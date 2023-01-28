import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-valiny',
  templateUrl: './valiny.component.html',
  styleUrls: ['./valiny.component.scss']
})
export class ValinyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick(){
    this.router.navigateByUrl('/bienvenue/valiny');
  }

}
