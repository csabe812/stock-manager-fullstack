import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-stock-item',
  templateUrl: './add-stock-item.component.html',
  styleUrls: ['./add-stock-item.component.css']
})
export class AddStockItemComponent {

  serialNumber: string = "";
  serialName: string = "";
  serialDescription: string = "";

  constructor(private http: HttpClient) {

  }

  onSerialNumberKey(event: any) {
    this.serialNumber = event.target.value;
  }

  onNameKey(event: any) {
    this.serialName = event.target.value;
  }

  onDescKey(event: any) {
    this.serialDescription = event.target.value;
  }

  onClick() {
    this.http.post("http://localhost:8080/stockitem", {
      "serialNumber": this.serialNumber,
      "name": this.serialName,
      "description": this.serialDescription
  }).subscribe((data: any) => {
    console.log(data);
  });
  }
}
