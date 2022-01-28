import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.css']
})
export class TimepickerComponent {

  form: FormGroup;
  isAllOk: boolean = true;

  constructor() {
    this.form = new FormGroup({
      'timepicker': new FormArray([this.createTimePickerFormGroup()])
    });
    this.form.statusChanges.subscribe(
      (status) => console.log(status)
    );
    console.log(<FormArray>this.form.get('timepicker'));
  }

  get t() { return this.form.get('timepicker') as FormArray; }
  get timepickerFormGroups() { return this.t.controls as FormGroup[]; }

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

  addNew() {
    const control = this.createTimePickerFormGroup();
    (<FormArray>this.form.get('timepicker')).push(control);
  }

  onSubmit() {
    this.isAllOk = this.isIntervalOk();
    console.log(this.isIntervalOk());
    console.log(this.form);
  }

  isIntervalOk():boolean {
    let fromTime = (+this.timepickerFormGroups[0].value.fromHour) * 60 + (+this.timepickerFormGroups[0].value.fromMinute);
    let toTime = (+this.timepickerFormGroups[0].value.toHour) * 60 + (+this.timepickerFormGroups[0].value.toMinute);
    if(!this.isCurrentIntervalOk(fromTime, toTime)) {
      console.log(fromTime);
      console.log(toTime);
      console.log("ITT?");
      return false;
    }
    for(let i  = 1; i< this.timepickerFormGroups.length; i++) {
      let currentFromTime = (+this.timepickerFormGroups[i].value.fromHour) * 60 + (+this.timepickerFormGroups[i].value.fromMinute);
      let currentToTime = (+this.timepickerFormGroups[i].value.toHour) * 60 + (+this.timepickerFormGroups[i].value.toMinute);
      if(!this.isCurrentIntervalOk(toTime, currentFromTime) || !this.isCurrentIntervalOk(currentFromTime, currentToTime)) {
        console.log(currentFromTime);
        console.log(currentToTime);
        return false;
      }
      toTime = currentToTime;
    }
    return true;
  }

  isCurrentIntervalOk(from: number, to: number): boolean {
    if(from < to) {
      return true;
    }
    return false;
  }

  createTimePickerFormGroup() {
    return new FormGroup({
      'fromHour': new FormControl(null, [Validators.required, this.inValidHours.bind(this)]),
      'fromMinute': new FormControl(null, [Validators.required, this.invalidMinutes.bind(this)]),
      'toHour': new FormControl(null, [Validators.required, this.inValidHours.bind(this)]),
      'toMinute': new FormControl(null, [Validators.required, this.invalidMinutes.bind(this)]),
    });
  }

  deleteRowByIndex(idx: number) {
    (this.form.get('timepicker') as FormArray).removeAt(idx);
  }

}
