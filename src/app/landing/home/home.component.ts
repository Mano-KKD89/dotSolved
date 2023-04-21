import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  passwordForm: FormGroup = new FormGroup({
     password: new FormControl('')
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.passwordForm = this.formBuilder.group({
      password: new FormControl('', [
        Validators.required
      ])
    });
  }

}
