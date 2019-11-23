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
import { WelcomeScreenComponent } from './user-dashboard/welcome/welcome-screen/welcome-screen.component';
import { DashboardComponent } from './user-dashboard/dashboard/dashboard.component';
import { UserWelcomeScreenComponent } from './user-dashboard/user-welcome-screen/user-welcome-screen.component';
import { AdminWelcomeScreenComponent } from './admin-dashboard/admin-welcome-screen/admin-welcome-screen.component';
import { TrainingDetailComponent } from './user-dashboard/training-request/training-detail/training-detail.component';
import { TrainingFormComponent } from './user-dashboard/training-request/training-form/training-form.component';
import { TrainingRequestComponent } from './user-dashboard/training-request/training-request.component';
import { MentorDashboardComponent } from './mentor-dashboard/mentor-dashboard/mentor-dashboard.component';
import { MentorWelcomeScreenComponent } from './mentor-dashboard/mentor-welcome-screen/mentor-welcome-screen.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard/admin-dashboard.component';
import { CompletedTrainingsComponent } from './user-dashboard/completed-trainings/completed-trainings.component';
import { CurrentTrainingComponent } from './user-dashboard/current-training/current-training.component';
import { CompletedTrainingComponent } from './mentor-dashboard/completed-training/completed-training.component';
import { MentorCurrentTrainingComponent } from './mentor-dashboard/mentor-current-training/mentor-current-training.component';
import { AdminCurrentTrainingComponent } from './admin-dashboard/admin-current-training/admin-current-training.component';
import { AdminCompletedTrainingComponent } from './admin-dashboard/admin-completed-training/admin-completed-training.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserSignupComponent,
    MentorSignupComponent,
    WelcomeScreenComponent,
    DashboardComponent,
    UserWelcomeScreenComponent,
    AdminWelcomeScreenComponent,
    TrainingDetailComponent,
    TrainingFormComponent,
    TrainingRequestComponent,
    MentorDashboardComponent,
    MentorWelcomeScreenComponent,
    AdminDashboardComponent,
    CompletedTrainingsComponent,
    CurrentTrainingComponent,
    CompletedTrainingComponent,
    MentorCurrentTrainingComponent,
    AdminCurrentTrainingComponent,
    AdminCompletedTrainingComponent
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
