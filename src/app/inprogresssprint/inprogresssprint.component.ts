import { Component, OnInit, ViewChild } from '@angular/core';

import { SprintService } from "../sprint.service";

import { PushNotificationService } from '../push.notification.service';

import { CircleProgressComponent, CircleProgressOptions } from 'ng-circle-progress'

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FinishedModalComponent } from '../finished-modal/finished-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inprogresssprint',
  templateUrl: './inprogresssprint.component.html',
  styleUrls: ['./inprogresssprint.component.css']
})
export class InprogresssprintComponent implements OnInit {

  sprints: Array<any> = [];
  addedSprint: any = [];
  requesting: boolean;

  pause = false;
  pauseTimeSec = 0;
  delai = 0;

  prog = -1000;

  // Progress spinner
  @ViewChild('circleProgress') circleProgress: CircleProgressComponent;
  _timer = null;
  options = new CircleProgressOptions();

  constructor(private _notificationService: PushNotificationService, private sprintService: SprintService, private modalService: NgbModal, private router: Router) {
    this._notificationService.requestPermission();
  }

  ngOnInit() {
    this.requesting = false;
    this.progress();
  }

  // Get the progression percentage
  progress() {
    this._timer = window.setInterval(() => {
      if (!this.pause) {
        var newSprint = (JSON.parse(localStorage.getItem('sprint')));

        var startTime = newSprint['startedAt'];
        var startTimeSec = parseInt(startTime.split(':')[0]) * 3600 + parseInt(startTime.split(':')[1]) * 60 + parseInt(startTime.split(':')[2]);

        var sprintLength = (newSprint['duration'].split('(')[1]).split(')')[0];
        var duration = parseInt(sprintLength.split(' ')[0]);
        var durationUnit = sprintLength.split(' ')[1];
        if (durationUnit === 'h') duration = duration * 3600;
        if (durationUnit === 'min') duration = duration * 60;

        var currentTime = new Date();
        var currentTimeSec = currentTime.getHours() * 3600 + currentTime.getMinutes() * 60 + currentTime.getSeconds();

        this.prog = 100 * (currentTimeSec - startTimeSec - this.delai) / duration;

        if (this.prog < 0 || this.prog > 100) { }
        else {
          this.options.percent = this.prog;
          if (this.prog === 100) {
            clearInterval(this._timer);
            this.finishSprint();
          }
        }
      }
    }, 1000);

  }

  // Set on hold the sprint
  holdSprint() {
    this.pause = true;
    var pauseTime = new Date();
    this.pauseTimeSec = pauseTime.getHours() * 3600 + pauseTime.getMinutes() * 60 + pauseTime.getSeconds();
  }

  // Resume the paused sprint
  resumeSprint() {
    this.pause = false;
    var resumeTime = new Date();
    var resumeTimeSec = resumeTime.getHours() * 3600 + resumeTime.getMinutes() * 60 + resumeTime.getSeconds();
    this.delai = this.delai + (resumeTimeSec - this.pauseTimeSec);
  }

  // Click on Stop Sprint --> Save the Sprint
  stopSprint() {
    clearInterval(this._timer);
    this.delai = 0;
    var newSprint = (JSON.parse(localStorage.getItem('sprint')));
    var now: Date = new Date();
    newSprint['finishedAt'] = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
    newSprint['status'] = 'Cancelled at';
    newSprint['progress'] = this.prog;
    this.requesting = true;

    this.sprintService.createSprint(newSprint).subscribe((res) => {
      this.sprints.push(newSprint);
      newSprint = {};
      this.requesting = false;
    })
    this.router.navigate(['/']);
    localStorage.removeItem('sprint');
  }

  // Progress = 100% --> save the Sprint
  finishSprint() {
    this.delai = 0;

    // Get actual time
    var now: Date = new Date();
    var newSprint = (JSON.parse(localStorage.getItem('sprint')));

    // Set sprints' values
    newSprint['finishedAt'] = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
    newSprint['status'] = 'Completed';
    newSprint['progress'] = 100;
    this.requesting = true;

    // Push to DB
    this.sprintService.createSprint(newSprint).subscribe((res) => {
      this.sprints.push(newSprint);
      newSprint = {};
      this.requesting = false;
    })

    setTimeout(function () { }, 1000);

    // Show the Notification
    var notification = newSprint['notification'];
    if (notification) this.notify();

    // Remove the current sprint from Local Storage & save the finished sprint in LocalStorage
    localStorage.removeItem('sprint');
    localStorage.setItem('finishedSprint', JSON.stringify(newSprint));

    // Show the finished sprint modal
    this.openFormModal();
  }

  // Set Notification content
  notify() {
    {
      let data: Array<any> = [];
      data.push({
        'title': '≡Sprint',
        'alertContent': 'Your sprint is finished'
      });
      this._notificationService.generateNotification(data);
    }
  }

  // Initialize the modal
  openFormModal() {
    const modalRef = this.modalService.open(FinishedModalComponent);
    modalRef.componentInstance.id = 10;

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
}