import { Component } from '@angular/core';

@Component({
  selector: 'current-month',
  templateUrl: './current-month.html',
  styleUrls: ['./current-month.css']
})
export class CurrentMonthComponent {

  dayOfMonthList: Date[] = [];
  today: Date = new Date();
  monthName: string = "";

  constructor(){
    this.dayOfMonthList = this.getDaysInMonth(this.today.getMonth(), this.today.getFullYear());
  }

  getDaysInMonth(month: number, year: number) {
    var date = new Date(year, month, 1);
    var days: Date[] = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    this.monthName = this.today.toLocaleString('default', { month: 'long' });
    return days;
  }

  prevMonth() {
    this.today.setMonth(this.today.getMonth() - 1);
    this.dayOfMonthList = this.getDaysInMonth(this.today.getMonth(), this.today.getFullYear());
  }

  nextMonth() {
    this.today.setMonth(this.today.getMonth() + 1);
    this.dayOfMonthList = this.getDaysInMonth(this.today.getMonth(), this.today.getFullYear());
  }
}
