import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-stock-item',
  templateUrl: './add-stock-item.component.html',
  styleUrls: ['./add-stock-item.component.css']
})
export class AddStockItemComponent {

  form: FormGroup;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      serialNumber: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.form.value.serialNumber);
    console.log(this.form.value.name);
    console.log(this.form.value.description);
    if (this.form.valid) {
      this.http.post("http://localhost:8080/stockitem", {
        "serialNumber": this.form.value.serialNumber,
        "name": this.form.value.name,
        "description": this.form.value.description
      }).subscribe((data: any) => {
        console.log(data);
      });
    }
  }
}
