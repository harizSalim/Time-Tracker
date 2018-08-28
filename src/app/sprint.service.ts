import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SprintService {

  constructor(private http: Http) { }

  // Get the users' sprints with his username in the path
  getSprints(username) {
    return this.http.get(environment.api + '/sprints/:' + username)
      .map(res => res.json());
  }

  // Create a new sprint
  createSprint(sprint) {
    return this.http.post(environment.api + '/newsprint', sprint)
      .map(res => res.json());
  }

  // Delete the users' sprints with his username in the path
  deleteSprints(username) {
    return this.http.delete(environment.api + '/deletesprint/:' + username);
  }
}
