import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  statusSidebar!: boolean;
  constructor() { }

  ngOnInit(): void {
    this.statusSidebar = localStorage.getItem('statusSidebarDashbord') === 'true';
  }
  
  onChangeStatusSidebar(event: {statusSidebar: boolean }): void {
    this.statusSidebar = event.statusSidebar;
  }

}
