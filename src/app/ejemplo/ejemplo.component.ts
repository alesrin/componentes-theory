//Las importaciones nos permiten importar dependencias (herramientas/funcionalidades de Angular)
import { Component } from '@angular/core';

//Un decorador es una función especial de TypeScript
@Component({
  selector: 'app-ejemplo', //Etiqueta que me permite utilizar este componente en otras partes de mi aplicación
  templateUrl: './ejemplo.component.html', //URL de la plantilla que supone la estructura del componente
  styleUrls: ['./ejemplo.component.css'] //URL del archivo que almacena los estilos del componente
})
export class EjemploComponent {
  //una clase es una plantilla que nos permite crear objetos. Permiten encapsular datos y encapsular método.



  titulo: string = "Cambio de título"
  /* Para mostrar esta propiedad en la vista utilizamos la interpolación 
  ejemplo.component.html -> {{titlulo}} */

}


/* Componentes dependientes de un módulo vs autónomos 
-- Esta aplicación depende de un módulo
-- Componentes autónomos son aquellos que no dependen de un módulo --standalone

Componentes standalone: 
  - El propio componente el que gestiona sus importaciones y exportaciones
  - Surgen con Angular 14
  - No necesitan el archivo app.module.ts
  - No necesitan el archivo app-routing.module.ts
  - Compatibles con versiones de angular 14 y posteriores
  - Se usan directamente donde se necesitan
  - Se usa para proyectos pequeños o muy específicos



Componentes dependientes: 
  - El módulo del cual depende el componente el que gestiona el propio módulo y sus herramientas
  - compatibles con todas las versiones de angular
  - Nos permite compartir y agrupar los componentes entre múltiples módulos
  - Para proyectos grandes que requieren mucha organización es mejor utilizar este tipo



*/
