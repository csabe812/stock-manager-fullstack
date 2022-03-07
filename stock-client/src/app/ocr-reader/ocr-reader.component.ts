import { Component, Input } from '@angular/core';

import { createWorker } from 'tesseract.js';

@Component({
  selector: 'ocr-reader',
  templateUrl: './ocr-reader.component.html',
  styleUrls: ['./ocr-reader.component.css']
})
export class OcrReaderComponent {
  /* Some text links:
  https://store-images.s-microsoft.com/image/apps.44472.14266069062940839.7622a220-e3b7-47fe-9320-b2106621e5cb.dd5f8cb2-c6d4-4930-b7dd-81d9c9385116
  */

  img = 'https://tesseract.projectnaptha.com/img/eng_bw.png';
  status: number = 0;
  progressStarted: boolean = false;
  ocrResult = '';

  detectImageClicked() {
    this.doOCR();
  }

  async doOCR() {
    console.log("started");
    const worker = createWorker({
      logger: m => {
        if (m.status == 'recognizing text') {
          this.progressStarted = true;
          this.status = Math.round(m.progress * 100);
        }
        console.log(m)
      }
    });
    await worker.load();
    await worker.loadLanguage('hun');
    await worker.initialize('hun');
    const { data: { text } } = await worker.recognize(this.img);
    this.ocrResult = text;
    await worker.terminate();
  }

  imageKeyup(event: any) {
    this.img = event.target.value;
  }

  readFile(event: any): void {
    if (event?.target?.files && event?.target?.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.img = ""+reader.result;

      reader.readAsDataURL(file);
    }
  }
}
