import { Component, Input } from '@angular/core';

@Component({
  selector: 'qr-code-generator',
  templateUrl: './qr-code-generator.component.html',
  styleUrls: ['./qr-code-generator.component.css']
})
export class QrCodeGeneratorComponent {
  @Input() qrString = '';
}
