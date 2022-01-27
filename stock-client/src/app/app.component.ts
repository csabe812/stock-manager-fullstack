import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stock-client';
  myAngularxQrCode = '';

  constructor(private http: HttpClient) {
    this.myAngularxQrCode = 'Your QR code data string';
    this.http.get<any>("http://localhost:8080/stockitem", {}).subscribe((data: any) => {
      console.log(data);
    });


    //this.doOCR();
  }

  onKey(event: any) {
    this.myAngularxQrCode = event.target.value;
    console.log(event.target.value);

  }
}
