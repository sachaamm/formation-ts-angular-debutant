import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './component/nav/nav.component';

import { MonPremierModule } from './module/mon-premier/mon-premier.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTreeModule } from '@angular/material/tree';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';

import { TestAppelWebserviceComponent } from './module/tp/component/test-appel-webservice/test-appel-webservice.component';
import { LoginComponent } from './component/login/login.component'

import { UserListComponent } from './module/tp/component/user-list/user-list.component';

import { LaReunionComponent } from './module/tp/component/la-reunion/la-reunion.component';
import { ParticipantsComponent } from './module/tp/component/participants/participants.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TestAppelWebserviceComponent,
    LoginComponent,
    UserListComponent,
    ParticipantsComponent,
    LaReunionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MonPremierModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
