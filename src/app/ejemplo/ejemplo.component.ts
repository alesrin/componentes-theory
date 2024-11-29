//app-ejemplo.component.ts
//Las importaciones nos permiten importar dependencias (herramientas/funcionalidades de Angular)
import { Component } from '@angular/core';

//Un decorador es una función especial de TypeScript, el decorador @Component le indica a Angular que esta clase es un componente y permite
@Component({
  selector: 'app-ejemplo', //Etiqueta que me permite utilizar este componente en otras partes de mi aplicación
  templateUrl: './ejemplo.component.html', //URL de la plantilla que supone la estructura del componente
  styleUrls: ['./ejemplo.component.css'] //URL del archivo que almacena los estilos del componente
})
export class EjemploComponent {
  //una clase es una plantilla que nos permite crear objetos. Permiten encapsular datos y encapsular métodos.

  titulo: string = "Cambio de título"
  /* Para mostrar esta propiedad en la vista utilizamos la interpolación 
  ejemplo.component.html -> {{titlulo}} */

  //<nombre-propiedad> : <tipo-propiedad> = <valor-propiedad>

 /* -nombre de la propiedad: Cómo vamos a identificar a esa propiedad
      · Nunca puede comenzar por un número
      · Nunca puede comenzar por un caracter especial, a excepción de _
      · No puede contener espacios. Utilizaremos CamelCase (Propiedades) o snake_case
      · Deben ser descripcivos y concisos
      · No pueden ser iguales a palabras reservadas de TypeScript
    -tipo de la propiedad: Qué tipo de dato vamos a almacenar (string (cadena de caracteres), number, boolean, array, any...
    - valor inicial: El dato que almacenará en un inicio
 */ 

    //TIPOS DE DATOS EN TS

    //*1-STRING: Guardar texto como un nombre o una descripción, puede contener números y caracteres especiales.

    mensaje: string = "Mi mensaje";
    mensaje2: string = 'Mi mensaje';

    //*2-NUMBER: Guarda números, por ejemplo edad, precios, cantidades...
    edad_usuario1: number = 25;
    edad_usuario2: number = 37;
    suma_edades: number = this.edad_usuario1 + this.edad_usuario2;
    edad2: number = 25.67;



    //*3-BOOLEAN: Guarda valores de verdadero o falso, muy útil sobre todo en condiciones o con diferentes estados. 
    estaActivo: boolean = true;
    estaActivo2: boolean = false;
    
    //*4-ARRAY: Colección de elementos. Guarda listas de elementos que comparten características
    frutas: string[] = ['Manzana', 'Plátano', 'Naranja']
    edades: number[] = [23, 45, 32, 67]
    cualquierDato: any[] = ['Manzana', 78]
    elementos: string[] = ["Angular", "React", "Vue"] //Ejemplo de nombre NO descriptivo
 /*   El index (índice) de un valor hace referencia a su posición dentro de una lista:
      · 1ª posición: index 0
      · 2ª posición: index 1
      · 3ª posición: index 2 */

    //*5-ANY: Nos permite almacenar cualquier tipo de dato.
      //· Es totalmente versátil peeeeeero también puede llevarnos a generar errores por no indicar el tipo exacto --> LO UTILIZAMOS SOLO CUANDO SEA ESTRICTAMENTE NECESARIO
    cualquierDato2: any = 'Hola mundo';
    cualquierDato3: any = 27;
    cualquierDato4: any = true;
    cualquierDato5: any = ['Hola mundo', 78];
}


/* INTERPOLACIÓN
- Mostrar valores o resultados de las propiedades que definimos en la clase dentro del HTML
- Utilizamos el doble corchete {{ }} para mostrar el valor de una propiedad
- La dirección del flujo de datos es desde el componente hacia la vista (UNIDIRECCIONAL)




*/











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
