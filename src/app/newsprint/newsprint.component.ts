import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { NewSprint } from "./newSprint";
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-newsprint',
  templateUrl: './newsprint.component.html',
  styleUrls: ['./newsprint.component.css']
})
export class NewsprintComponent implements OnInit {

  // Get the username from local storage
  username = (JSON.parse(localStorage.getItem('profile'))).name;

  // Set the duration's select options
  durations = ['Instant (5 s)',
    'Very Short (5 min)',
    'Short (15 min)',
    'Pomodoro (25 min)',
    'Long (45 min)',
    'Very Long (60 min)'];

  // Set the default values in the new sprint form  
  model = new NewSprint('Pomodoro (25 min)', null, false);

  submitted = false;

  get diagnostic() { return JSON.stringify(this.model); }

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  // Get the values from the form & save them in the local storage
  saveSprint(form: NgForm) {
    const params = form.value;
    const now: Date = new Date();

    params['createdAt'] = now.getFullYear() + '-' + now.getMonth() + '-' + now.getDate();
    params['startedAt'] = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
    params['user'] = this.username;

    localStorage.setItem('sprint', JSON.stringify(params));

    this.submitted = true;
  }

}
