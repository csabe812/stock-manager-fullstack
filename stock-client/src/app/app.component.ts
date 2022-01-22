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
  img = 'https://scontent-vie1-1.xx.fbcdn.net/v/t1.15752-9/271585143_3085011435079542_4117000986681090894_n.png?_nc_cat=106&ccb=1-5&_nc_sid=ae9488&_nc_ohc=9g1L6mDTdDEAX-X85k6&_nc_ht=scontent-vie1-1.xx&oh=03_AVLDm27rxjIsqbiKJHvYhsh2QpiEek_RU7O5D3IsjDjC8Q&oe=6211A77C';

  constructor() {
    this.myAngularxQrCode = 'Your QR code data string';
    this.doOCR();
  }

  scanSuccessHandler(event: any) {
    console.log(event);
  }

  async doOCR() {
    console.log("started");
    const worker = createWorker({
      logger: m => console.log(m),
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
}
