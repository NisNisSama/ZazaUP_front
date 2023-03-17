import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  username!: string;
  timeLeft: number = 7200;
  interval: any;

  constructor(
    private router: Router, 
    private headerService: HeaderService) { }

  ngOnInit(): void {
    this.startTimer();
    this.headerService.requestInfo().subscribe({
      next: res => this.username = res.username
    });
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        // this.router.navigateByUrl('/auth');
        alert("Time's up !");
      }
    },1000)
  }



}
