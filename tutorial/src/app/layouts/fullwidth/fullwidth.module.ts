import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullwidthComponent } from './fullwidth.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from 'src/app/modules/login/login.component';



@NgModule({
  declarations: [
    FullwidthComponent,LoginComponent
  ],
  imports: [
    CommonModule,RouterModule,FlexLayoutModule,SharedModule
  ]
})
export class FullwidthModule { }
