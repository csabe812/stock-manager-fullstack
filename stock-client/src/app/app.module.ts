import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { QRCodeModule } from 'angularx-qrcode';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AddStockItemComponent } from './add-stock-item/add-stock-item.component';
import { QrCodeGeneratorComponent } from './qr-code-generator/qr-code-generator.component';
import { OcrReaderComponent } from './ocr-reader/ocr-reader.component';
import { QrCodeReaderComponent } from './qr-code-reader/qr-code-reader.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TimepickerComponent } from './core/timepicker/timepicker.component';
import { CurrentMonthComponent } from './current-month/current-month';

@NgModule({
  declarations: [
    AddStockItemComponent,
    QrCodeGeneratorComponent,
    OcrReaderComponent,
    QrCodeReaderComponent,
    TimepickerComponent,
    CurrentMonthComponent,
    AppComponent
  ],
  imports: [
    QRCodeModule,
    ZXingScannerModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
