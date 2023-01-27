import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  timeLeft: number = 7200;
  interval: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    
    this.startTimer();

  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.router.navigateByUrl('/auth');
      }
    },1000)
  }

}
