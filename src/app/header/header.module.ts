import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogotipoComponent } from './logotipo/logotipo.component';



@NgModule({
  declarations: [
    LogotipoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [LogotipoComponent]
})
export class HeaderModule { }
