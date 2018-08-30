import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SprintService } from "../sprint.service";

@Component({
  selector: 'app-pastsprints',
  templateUrl: './pastsprints.component.html',
  styleUrls: ['./pastsprints.component.css']
})
export class PastsprintsComponent implements OnInit {

  // Get the username from local storage
  username = (JSON.parse(localStorage.getItem('profile'))).name;

  sprints: Array<any>;
  requesting: boolean;


  constructor(private router: Router, private sprintService: SprintService) {
    this.getUserSprints(this.username);
  }

  ngOnInit() {
    this.requesting = false;
  }

  // Get the users' sprints
  getUserSprints(username) {
    console.log('SELECT * FROM SPRINT WHERE USER' + this.username);
    this.requesting = true;
    this.sprintService.getSprints(username).subscribe((res) => {
      this.sprints = res;
      this.requesting = false;
    }, (err) => {
      this.requesting = false;
    })
  }

  // delete the users' sprints
  deleteUserSprints(username) {
    console.log('DELETE FROM SPRINT WHERE USER:=' + this.username);
    this.requesting = true;
    this.sprintService.deleteSprints(this.username).subscribe(() => {
      this.sprints.forEach((t, i) => {
        this.sprints = [];
      });
      this.requesting = false;
    })
    this.router.navigate(['/sprint']);
  }

  // Sort the table by duration
  sortByDuration() {
    return this.sprints.sort((a, b) => a.duration < b.duration ? -1 : 1);
  }

  // Sort the table by status
  sortByStatus() {
    return this.sprints.sort((a, b) => a.status < b.status ? -1 : 1);
  }

  // Sort the table by creation date
  sortByCreation() {
    return this.sprints.sort((a, b) => new Date(a.createdAt) < new Date(b.createdAt) ? -1 : 1);
  }

  // Sort the table by start time
  sortByStart() {
    return this.sprints.sort((a, b) => new Date(a.startedAt) < new Date(b.startedAt) ? -1 : 1);
  }

  // Sort the table by finish time
  sortByFinish() {
    return this.sprints.sort((a, b) => new Date(a.finishedAt) < new Date(b.finishedAt) ? -1 : 1);
  }

  // Sort the table by description
  sortByDescription() {
    return this.sprints.sort((a, b) => a.description < b.description ? -1 : 1);
  }

}