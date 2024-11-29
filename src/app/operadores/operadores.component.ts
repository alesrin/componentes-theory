import { Component } from '@angular/core';

@Component({
  selector: 'operadores',
  templateUrl: './operadores.component.html',
  styleUrls: ['./operadores.component.css']
})
export class OperadoresComponent {

/* OPERADORES 
-> Herramientas de TS que me van a permitir realizar opeaciones con los datos, comparar datos o mostrar datos en función de sus propios estados.

---- OPERADORES ARITMÉTICOS---- 
-> Son los que se utilizan para realizar cáclculos matemáticas.
-> Ejemplos: +, -, *, /, % (módulo), ** (potencia)
*/
numero1: number = 20
numero2: number = 7
suma: number = this.numero1 + this.numero2
resta: number = this.numero1 - this.numero2
multiplicacion: number = this.numero1 * this.numero2
division: number = this.numero1 / this.numero2 //Nos da como resultado un número flotante (con decimales) --> 2
modulo: number = this.numero1 % this.numero2 //Nos da el resto de la división --> 6
potencia: number = this.numero1 ** this.numero2 //Nos da el resultado de elevar


precioTotal: number = 50;
cantidad: number = 3;
iva: number = this.precioTotal * 0.21;
totalPagar: number = this.precioTotal + this.iva;


/* ---- OPERADORES COMPORACIÓN---- 
-> Comparan dos valores. Siempre devuelve resultados Booleanos (true, false)
-> Ejemplos: >, <, >=, <=, ===, !==
numero1: number = 20
numero2: number = 20
*/
mayorQue: boolean = this.numero1 > this.numero2 //TRUE
menorQue: boolean = this.numero1 < this.numero2 //FALSE
mayorIgualQue: boolean = this.numero1 >= this.numero2 //TRUE
menorIgualQue: boolean = this.numero1 <= this.numero2 //FALSE
igualQue: boolean = this.numero1 === this.numero2 //FALSE
distintoDe: boolean = this.numero1 !== this.numero2 //TRUE


edadUsuario: number = 10
esMayorEdad: boolean = this.edadUsuario >= 18;



/* ---- OPERADORES LÓGICOS---- 
-> Combinan condiciones. Devuelven siempre un valor booleano(true, false)
Para que me devuelva TRUE: ambas condiciones deben ser interpretadas como verdaderas.
Para que me devuelva FALSE: al menos una condición debe ser interpretada como falsa. 
-> Ejemplos: &&, !
numero1: number = 20
numero2: number = 7
*/

ejemploY: boolean = this.numero1 > this.numero2 && this.numero1 === 21 //FALSE
ejemploX: boolean = this.numero1 > this.numero2 && this.numero1 === 20 //TRUE

}
