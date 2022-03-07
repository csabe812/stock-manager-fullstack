import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStockItemComponent } from './add-stock-item/add-stock-item.component';
import { TimepickerComponent } from './core/timepicker/timepicker.component';
import { CurrentMonthComponent } from './current-month/current-month';
import { ListStockItemComponent } from './list-stock-item/list-stock-item.component';

import { OcrReaderComponent } from './ocr-reader/ocr-reader.component';
import { QrCodeGeneratorComponent } from './qr-code-generator/qr-code-generator.component';

const routes: Routes = [
  { path: 'read-ocr', component: OcrReaderComponent },
  { path: 'generate-qr', component: QrCodeGeneratorComponent },
  { path: 'stock-item-add', component: AddStockItemComponent },
  { path: 'timepicker', component: TimepickerComponent },
  { path: 'current-month', component: CurrentMonthComponent },
  { path: 'list-stock-items', component: ListStockItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
