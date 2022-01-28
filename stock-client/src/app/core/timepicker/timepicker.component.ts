import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.css']
})
export class TimepickerComponent {

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      'hour': new FormControl(null, [Validators.required, this.inValidHours.bind(this)]),
      'minute': new FormControl(null, [Validators.required, this.invalidMinutes.bind(this)]),
    });
    this.form.statusChanges.subscribe(
      (status) => console.log(status)
    );
  }

  inValidHours(control: FormControl): { [s: string]: boolean } {
    let val = +control.value;
    if (isNaN(val) || val < 0 || val > 24) {
      return { 'hourIsInvalid': true };
    }
    return null as any;
  }

  invalidMinutes(control: FormControl): { [s: string]: boolean } {
    let val = +control.value;
    if (isNaN(val) || +val < 0 || +val > 59) {
      return { 'minuteIsInvalid': true };
    }
    return null as any;
  }

  onSubmit() {
    console.log(this.form);
  }

}
