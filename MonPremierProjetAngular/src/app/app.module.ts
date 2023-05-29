import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonDeuxiemeComposantComponent } from './module/mon-premier/component/mon-deuxieme-composant/mon-deuxieme-composant.component';
import { MonPremierComposantComponent } from './module/mon-premier/component/mon-premier-composant/mon-premier-composant.component';
import { MonTroisiemeComposantComponent } from './module/mon-premier/component/mon-troisieme-composant/mon-troisieme-composant.component';
import { MonPremierModule } from './module/mon-premier/mon-premier.module';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './component/nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

import { TestAppelWebserviceComponent } from './component/test-appel-webservice/test-appel-webservice.component';
import { LoginComponent } from './component/login/login.component'
import { MatInputModule } from '@angular/material/input';
import { UserListComponent } from './module/mon-premier/component/user-list/user-list.component';
import { MatTableModule } from '@angular/material/table';
import { AgrumesComponent } from './module/mon-premier/component/agrumes/agrumes.component';
import { LaReunionComponent } from './module/tp/component/la-reunion/la-reunion.component';
import { ParticipantsComponent } from './module/tp/component/participants/participants.component';

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComposantComponent,
    MonDeuxiemeComposantComponent,
    MonTroisiemeComposantComponent,
    NavComponent,
    TestAppelWebserviceComponent,
    LoginComponent,
    UserListComponent,
    AgrumesComponent,
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
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
