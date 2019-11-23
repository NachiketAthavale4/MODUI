import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { FormsModule } from '@angular/forms';
import { UserSignupComponent } from './user-signup/user-signup/user-signup.component';
import { MentorSignupComponent } from './user-signup/mentor-signup/mentor-signup.component';
import { RouterModule } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeScreenComponent } from './dashboard/welcome/welcome-screen/welcome-screen.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { UserWelcomeScreenComponent } from './dashboard/user-welcome-screen/user-welcome-screen.component';
import { MentorWelcomeScreenComponent } from './dashboard/mentor-welcome-screen/mentor-welcome-screen.component';
import { AdminWelcomeScreenComponent } from './dashboard/admin-welcome-screen/admin-welcome-screen.component';
import { TrainingDetailComponent } from './dashboard/training-request/training-detail/training-detail.component';
import { TrainingFormComponent } from './dashboard/training-request/training-form/training-form.component';
import { TrainingRequestComponent } from './dashboard/training-request/training-request.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserSignupComponent,
    MentorSignupComponent,
    WelcomeScreenComponent,
    DashboardComponent,
    UserWelcomeScreenComponent,
    MentorWelcomeScreenComponent,
    AdminWelcomeScreenComponent,
    TrainingDetailComponent,
    TrainingFormComponent,
    TrainingRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'user-login', component: UserLoginComponent },
      { path: 'user-signup', component: UserSignupComponent },
      { path: 'trainer-signup', component: MentorSignupComponent },
      { path: '', component: DashboardComponent }
      //{ path: '', redirectTo: 'user-login', pathMatch: 'full' }
    ]),
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
