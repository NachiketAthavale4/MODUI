import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MentorComponent } from './mentor/mentor.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { UserComponent } from './user/user.component';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { ResetPasswordComponent } from './user/reset-password/reset-password.component';
import { EditSkillComponent } from './mentor/edit-skill/edit-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    MentorComponent,
    UserComponent,
    UserLoginComponent,
    ResetPasswordComponent,
    EditSkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    TimepickerModule.forRoot(),
    FormsModule,
    ShowHidePasswordModule,
    ButtonsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
