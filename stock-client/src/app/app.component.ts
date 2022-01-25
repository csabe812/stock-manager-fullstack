import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { createWorker } from 'tesseract.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stock-client';
  myAngularxQrCode = '';
  ocrResult = 'Recognizing...';
  img = 'https://tesseract.projectnaptha.com/img/eng_bw.png';
  status: number = 0;
  progressStarted: boolean = false;

  constructor(private http: HttpClient) {
    this.myAngularxQrCode = 'Your QR code data string';
    this.http.get<any>("http://localhost:8080/stockitem", {}).subscribe((data: any) => {
      console.log(data);
    });


    //this.doOCR();
  }

  scanSuccessHandler(event: any) {
    console.log(event);
  }

  async doOCR() {
    console.log("started");
    const worker = createWorker({
      logger: m => {
        if(m.status == 'recognizing text') {
          this.progressStarted = true;
          this.status = Math.round(m.progress * 100);
        }
        console.log(m)
      }
    });
    console.log("started2");
    await worker.load();
    await worker.loadLanguage('hun');
    await worker.initialize('hun');
    const { data: { text } } = await worker.recognize(this.img);
    this.ocrResult = text;
    console.log(text);
    await worker.terminate();
  }

  onKey(event: any) {
    this.myAngularxQrCode = event.target.value;
    console.log(event.target.value);

  }

  buttonClicked() {
    this.doOCR();
  }
}
