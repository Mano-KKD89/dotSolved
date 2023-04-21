import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
interface Login {
  email:string,
  password:string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
 });

 constructor(private formBuilder: FormBuilder,
  private router: Router,
   public translateService: TranslateService) {}

 ngOnInit(): void {
   this.loginForm = this.formBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email]),
     password: new FormControl('', [
       Validators.required
     ])
   });
 }
 public changeLanguage(language: string): void {
  this.translateService.use(language);
}

public submit(data:Login) {
  console.log(data);
  this.router.navigate(['/auth/otp']); // After login it will redirect to OTP page
}

}
