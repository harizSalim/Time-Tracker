import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.css']
})
export class SprintComponent implements OnInit {

  pastpage = true;
  current = false;

  constructor() { }

  ngOnInit() {
  }

  // Go to the past sprints page
  navigationPast() {
    this.pastpage = true;
  }

  // Go to the new sprint page 
  navigationNew() {
    this.pastpage = false;
  }

  // Return the username to show it in 'Logged in as'
  get username(): any {
    return (JSON.parse(localStorage.getItem('profile'))).name;
  }

}