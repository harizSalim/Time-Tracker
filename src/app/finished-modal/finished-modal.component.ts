import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


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
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  private createForm() {
    var finishedSprint = (JSON.parse(localStorage.getItem('finishedSprint')));
    this.myForm = this.formBuilder.group({
      username: finishedSprint['startedAt'],
      password: finishedSprint['finishedAt']
    });
  }

  private submitForm() {
    this.activeModal.close(this.myForm.value);
    localStorage.removeItem('finishedSprint');
  }

}
