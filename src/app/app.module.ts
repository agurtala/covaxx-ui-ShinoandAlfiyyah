import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BookingPageComponent } from './pages/booking-page/booking-page.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PatientComponent } from './pages/patient/patient.component';
import { PractitionerComponent } from './pages/practitioner/practitioner.component';
import { SessionsComponent } from './pages/sessions/sessions.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { CertificateComponent } from './pages/certificate/certificate.component';
import { InboxComponent } from './pages/inbox/inbox.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BookingPageComponent,
    PatientComponent,
    PractitionerComponent,
    SessionsComponent,
    ConfirmationComponent,
    CertificateComponent,
    InboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
