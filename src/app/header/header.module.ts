import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogotipoComponent } from './logotipo/logotipo.component';
import { Logotipo2Component } from './logotipo2/logotipo2.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ContactIconsComponent } from './contact-icons/contact-icons.component';



@NgModule({
  declarations: [
    LogotipoComponent,
    Logotipo2Component,
    MainMenuComponent,
    ContactIconsComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[], 
  exports: [LogotipoComponent, Logotipo2Component, MainMenuComponent, ContactIconsComponent]
})
export class HeaderModule { }
