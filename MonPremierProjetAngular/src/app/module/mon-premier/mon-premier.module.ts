import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonPremierRoutingModule } from './routing/mon-premier-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ExampleServiceComponent } from './component/example-service/example-service.component';
import { ExampleServiceEmetteurComponent } from './component/example-service-emetteur/example-service-emetteur.component';
import { ExampleServiceRecepteurComponent } from './component/example-service-recepteur/example-service-recepteur.component';
import { ExempleFonctionComponent } from './component/exemple-fonction/exemple-fonction.component';
import { ExempleTableauxComponent } from './component/exemple-tableaux/exemple-tableaux.component';
import { ExempleRoutingParamComponent } from './component/exemple-routing-param/exemple-routing-param.component';
import { ExempleFormulaireComponent } from './component/exemple-formulaire/exemple-formulaire.component';
import { ExempleIoComponent } from './component/exemple-io/exemple-io.component';
import { ExempleIoInputComponent } from './component/exemple-io-input/exemple-io-input.component';
import { ExempleIoOutputComponent } from './component/exemple-io-output/exemple-io-output.component';

@NgModule({
  declarations: [
    ExampleServiceComponent,
    ExampleServiceEmetteurComponent,
    ExampleServiceRecepteurComponent,
    ExempleFonctionComponent,
    ExempleTableauxComponent,
    ExempleRoutingParamComponent,
    ExempleFormulaireComponent,
    ExempleIoComponent,
    ExempleIoInputComponent,
    ExempleIoOutputComponent
  ],
  imports: [
    CommonModule,
    MonPremierRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [

  ]
})
export class MonPremierModule { }
