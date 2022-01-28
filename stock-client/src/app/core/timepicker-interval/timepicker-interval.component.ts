import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'timepicker-interval',
  templateUrl: './timepicker-interval.component.html',
  styleUrls: ['./timepicker-interval.component.css']
})
export class TimepickerIntervalComponent {

  intervalList = [0];

  constructor() {
  }

  addNewInterval() {
    this.intervalList.push(this.intervalList[this.intervalList.length - 1] + 1);
  }

  deleteListItem(idx: number) {
    const index = this.intervalList.indexOf(idx, 0);
    if (index > -1) {
      this.intervalList.splice(index, 1);
    }
    if(this.intervalList.length === 0) {
      this.intervalList.push(0);
    }
  }

}
