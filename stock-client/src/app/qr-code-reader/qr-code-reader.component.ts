import { Component } from '@angular/core';

@Component({
  selector: 'qr-code-reader',
  templateUrl: './qr-code-reader.component.html',
  styleUrls: ['./qr-code-reader.component.css']
})
export class QrCodeReaderComponent {
  scanSuccessHandler(event: any) {
    console.log(event);
  }
}
