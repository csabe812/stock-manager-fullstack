import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-stock-item',
  templateUrl: './list-stock-item.component.html',
  styleUrls: ['./list-stock-item.component.css']
})
export class ListStockItemComponent implements OnInit {

  data: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>("http://localhost:8080/stockitem", {}).subscribe((data: any[]) => {
      console.log(data);
      this.data = data;
    });
  }
}
