import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { QRCodeModule } from 'angularx-qrcode';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AddStockItemComponent } from './add-stock-item/add-stock-item.component';
import { QrCodeGeneratorComponent } from './qr-code-generator/qr-code-generator.component';
import { OcrReaderComponent } from './ocr-reader/ocr-reader.component';
import { QrCodeReaderComponent } from './qr-code-reader/qr-code-reader.component';

@NgModule({
  declarations: [
    AddStockItemComponent,
    QrCodeGeneratorComponent,
    OcrReaderComponent,
    QrCodeReaderComponent,
    AppComponent
  ],
  imports: [
    QRCodeModule,
    ZXingScannerModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
