import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonQuatriemeComponent } from 'src/app/module/mon-premier/component/mon-quatrieme/mon-quatrieme.component';
import { MonCinquiemeComponent } from './component/mon-cinquieme/mon-cinquieme.component';
import { MonPremierRoutingModule } from './routing/mon-premier-routing.module';
import { MonSixiemeComponent } from './component/mon-sixieme/mon-sixieme.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    MonQuatriemeComponent,
    MonCinquiemeComponent,
    MonSixiemeComponent
  ],
  imports: [
    CommonModule,
    MonPremierRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    MonQuatriemeComponent,
    MonCinquiemeComponent
  ]
})
export class MonPremierModule { }
