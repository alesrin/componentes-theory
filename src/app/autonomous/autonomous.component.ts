import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'autonomous',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './autonomous.component.html',
  styleUrls: ['./autonomous.component.css']
})
export class AutonomousComponent {
/* 
OTRO EJEMPLO INTERPOLACIÓN
mesesAnio: string[] = [ "Enero", "Marzo", "Junio", "Septiembre"] */


/* ENLACE DE DATOS BIDIRECCIONAL "TWO WAY BINDING"

Herramienta que me permite enlazar datos que fluyen en ambas direcciones:
  · De la vista al controlador(archivo TS, clase): Si el usuario escribe algo en un campo de entrada (input), yo puedo recoger ese dato y actualizar un valor automáticamente en el controlador. Lo enlazo a traves DEL NOMBRE DE LA PROPIEDAD QUE VA A ALMACENAR ESE DATO
  · Del controlador(archivo TS, clase) a la vista: Si la propiedad cambia en el controlador, se actualiza automáticamente en la vista. 
*/

//Ejemplo Two Way Binding
nombre: string = "";

//--> EDITAR UN VALOR QUE YA EXISTA EN EL CONTROLADOR
mensajeInicial: number = 47896


//EJEMPLO SENCILLO DE RECOGIDA DE DATOS DEL USUARIO

nombreUsuario: string = ""
anioActual: number = 2024
anioNacimiento: number = 0




}
