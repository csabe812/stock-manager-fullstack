import { Component } from '@angular/core';

@Component({
  selector: 'current-month',
  templateUrl: './current-month.html',
  styleUrls: ['./current-month.css']
})
export class CurrentMonthComponent {

  dayOfMonthList: Date[] = [];

  constructor(){
    this.dayOfMonthList = this.getDaysInMonth(new Date().getMonth(), new Date().getFullYear());
  }

  getDaysInMonth(month: number, year: number) {
    var date = new Date(year, month, 1);
    var days: Date[] = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  }
}
