import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    company: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    conPassword: new FormControl(''),
 });

 constructor(private formBuilder: FormBuilder) {}

 ngOnInit(): void {
   this.registerForm = this.formBuilder.group({
    firstName: new FormControl('', [
      Validators.required
    ]),
    lastName: new FormControl('', [
       Validators.required
     ]),
     company: new FormControl('', [
       Validators.required
     ]),
     email: new FormControl('', [
       Validators.required
     ]),
     conPassword: new FormControl('', [
       Validators.required
     ]),
     password: new FormControl('', [
       Validators.required
     ]),
   });
 }

}
