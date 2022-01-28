import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

import { NgbTimepicker } from '@ng-bootstrap/ng-bootstrap';
import { isMinusToken } from 'typescript';

@Component({
  selector: 'from-to-timepicker',
  templateUrl: './from-to-timepicker.component.html',
  styleUrls: ['./from-to-timepicker.component.css']
})
export class FromToTimepickerComponent {

  time = {hour: 13, minute: 30};
  form: FormGroup;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder) {
    this.form = new FormGroup(
      {
        from: new FormControl(""),
        to: new FormControl("")
      },
      [Validators.required, this.dateRangeValidator]
    );
  }

  onSubmit() {
    console.log(this.form.value.serialNumber);
    console.log(this.form.value.name);
    console.log(this.form.value.description);
    if (this.form.valid) {
      this.http.post("http://localhost:8080/stockitem", {
        "serialNumber": this.form.value.serialNumber,
        "name": this.form.value.name,
        "description": this.form.value.description
      }).subscribe((data: any) => {
        console.log(data);
      });
    }
  }

  private dateRangeValidator: ValidatorFn = (): {
    [key: string]: any;
  } | null => {

    let invalid = false;
    const from = this.form && this.form.get("from")?.value;
    const to = this.form && this.form.get("to")?.value;
    /*if (from && to) {
      invalid = new Date(from).valueOf() > new Date(to).valueOf();
    }*/
    console.log(from);
    console.log(to);
    if(from && to) {
      invalid = (from.hour * 60 + from.minute) > (to.hour * 60 + to.minute);
    }
    console.log(invalid);
    return invalid ? { invalidRange: { from, to } } : null;
  };
}
