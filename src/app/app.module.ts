//El módulo principal de la aplicación, estructura y organiza nuestra aplicación 
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { AutonomousComponent } from './autonomous/autonomous.component';
import { OperadoresComponent } from './operadores/operadores.component';
import { FormsModule } from '@angular/forms';

//El decorador NgModule: Declara que esta clase es un módulo. Los módulos en Angular se utilizan para organizar el código 
@NgModule({
  declarations: [ //Aquí es donde se declaran los componentes
    AppComponent,
    EjemploComponent,
    OperadoresComponent,
  ],
  imports: [ //Módulos que necesita nuestra aplicación para funcionar correctamente
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    AutonomousComponent,
    FormsModule
  ],
  providers: [], //Añadimos aquí los servicios
  bootstrap: [AppComponent] //Componente raiz. Punto de entrada de mi aplicación 
})
export class AppModule { }



/* TIPOS DE DECORADORES

@Component: Declara que una clase es un componente
  - Va a tener una plantilla HTML
  - Va a tener unos estilos
  - Como es una clase, va a encapsular datos y métodos

@NgModule: Declara que una clase es un módulo
  - Este módulo organiza los componentes que tiene declarados en "declarations"
  - Define los módulos y servicios que pueden utilizar los componentes que está organizando.

@Injectable: indica que la clase donde se declara este decorador es un servicio y que Angular va a poder inyectarlo en donde se necesite.

        @Injectable({
          provideIn: 'root'
        })

@Directive: declara que una clase es una directiva
@Pipe: Declara que una clase es un pipe, que me va a permitir transformar datos en plantillas

-----------DECORADORES PARA PROPIEDADES------
@Input: Permite que una propiedad de un componente reciba datos desde su componente padre
@Output: Permite que un componente emita eventos hacia el componente padre


*/

