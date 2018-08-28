import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SprintComponent } from './sprint/sprint.component';
import { PastsprintsComponent } from './pastsprints/pastsprints.component';
import { NewsprintComponent } from './newsprint/newsprint.component';
import { InprogresssprintComponent } from './inprogresssprint/inprogresssprint.component';
import { FinishedModalComponent } from './finished-modal/finished-modal.component';

import { AuthService } from './auth.service';
import { SprintService } from './sprint.service';
import { PushNotificationService } from './push.notification.service';

const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'sprint', component: SprintComponent },
  { path: 'newsprint', component: NewsprintComponent },
  { path: 'pastsprints', component: PastsprintsComponent },
  { path: 'inprogress', component: InprogresssprintComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SprintComponent,
    PastsprintsComponent,
    NewsprintComponent,
    InprogresssprintComponent,
    FinishedModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    NgCircleProgressModule.forRoot(),
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
  ],
  providers: [
    AuthService,
    SprintService,
    PushNotificationService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    FinishedModalComponent
  ]
})
export class AppModule { }
