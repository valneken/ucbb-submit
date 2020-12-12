import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  form: FormGroup;

  constructor(public fb: FormBuilder) {
    this.form = this.fb.group({
      name: [''],
      avatar: [null]
    })
  }

  ngOnInit() { }

  uploadFile() {  }

  submitForm() {
    console.log(this.form.value)
  }

}