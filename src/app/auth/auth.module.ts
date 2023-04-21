import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { GlobalModule } from '../global/global.module';
import { RegisterComponent } from './register/register.component';
import { NgOtpInputModule } from  'ng-otp-input';
import { OtpComponent } from './otp/otp.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    OtpComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
    }),
    NgOtpInputModule,
    FormsModule, ReactiveFormsModule, GlobalModule
  ]
})
export class AuthModule { }
