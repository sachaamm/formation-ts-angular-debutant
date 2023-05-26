import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonDeuxiemeComposantComponent } from './component/mon-deuxieme-composant/mon-deuxieme-composant.component';
import { MonPremierComposantComponent } from './component/mon-premier-composant/mon-premier-composant.component';
import { MonTroisiemeComposantComponent } from './component/mon-troisieme-composant/mon-troisieme-composant.component';
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
import { TestAppelWebserviceComponent } from './component/test-appel-webservice/test-appel-webservice.component'

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComposantComponent,
    MonDeuxiemeComposantComponent,
    MonTroisiemeComposantComponent,
    NavComponent,
    TestAppelWebserviceComponent
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
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
