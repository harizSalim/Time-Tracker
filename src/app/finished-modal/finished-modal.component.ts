import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


@Component({
  selector: 'app-finished-modal',
  templateUrl: './finished-modal.component.html',
  styleUrls: ['./finished-modal.component.css']
})
export class FinishedModalComponent {

  @Input() id: number;
  myForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.createForm();
  }

  private createForm() {
    this.myForm = this.formBuilder.group({});
  }

  private submitForm() {
    this.activeModal.close(this.myForm.value);
    this.router.navigate(['/']);
    localStorage.removeItem('finishedSprint');
  }

  // Return the duration th show it int the dialog box
  get duration(): any {
    return (JSON.parse(localStorage.getItem('finishedSprint'))).duration;
  }

  // Return the startedAt to show it in the dialog box
  get started(): any {
    return (JSON.parse(localStorage.getItem('finishedSprint'))).startedAt;
  }

  // Return the finishedAt to show it in the dialog box
  get finished(): any {
    return (JSON.parse(localStorage.getItem('finishedSprint'))).finishedAt;
  }

}
