/*//1 edad Var a diseñar un algoritmo que tome el valor de dos edades y menciona cual es el mayor.

  function edad(a,b) 
{
  var Edad_a= a;
  var  Edad_b=b ;

  if(Edad_a>Edad_b){

       console.log("edad a es mayor que b");
  }
  else
  console.log("edad b es mayor que a"):
  
}


 edad(14,12). 
*/


/*//2  El docente de programación quiere capturar la nota de sus 5 estudiante y obtener el promedio de notas

function PromNotas(nota1,nota2,nota3,nota4,nota5){
  
    var promedio = ((nota1+nota2+nota3+nota4+nota5)/5);
    console.log(`El promedio del estudiante es ${promedio}`);
}

PromNotas(1,2,3,4,5)
*/

/*//3 Los magios actualizaron su santo y seña a la palabra: “dom” por eso es necesario que usted cree un algoritmo que solicite la palabra y si es correcta que diga un mensaje: “bienvenidos al nuevo club de los magios” de lo contrario diga: “No puedes ingresar, no eres un miembro”

function ContraseñaMagios(x){

    if(x==="dom"){
       console.log("bienvenidos al nuevo club de los magios");}
     else {
     console.log("No puedes ingresar, no eres un miembro chao homero ");}

    }

ContraseñaMagios("dom")

*/

//4 La sala de cine de la ciudad de Pasto requiere realizar el control de los clientes que van a ingresar a ver la función de Batman, el requisito para ver la película debe ser que el cliente esté vacunado. Si está vacunado va aparecer un mensaje que diga: bienvenido, si no está vacunado saldrá un mensaje que diga: por favor ve a vacunarte.

/*// para ingresar se debe dijitar el nombre de la  de la pelicula debe ser batman , EstadoVacuna evalua si el cliente de esta, en EstadoVacuna se debe escribir si o no   //vacunado  


function Cine(pelicula,EstadoVacuna){

    if(pelicula==="batman"& EstadoVacuna==="si"){
    
    console.log("bienvenido");;
    }

  else if(pelicula!=="batman" & EstadoVacuna!=="no" ){{

    console.log("esta pelicula no esta en cartelera ");;

   }}
   else{

    console.log("por favor ve a vacunarte");

   }

} 

Cine("batman","si")

*/

/*//5-Realiza un algoritmo que solicite una fecha de nacimiento y en razón a ese dato va /calcular la edad.

function EdadACTUAL(AnioActual,AnioDeNacimiento){
  
var EDAD= AnioActual-AnioDeNacimiento;

console.log(`Su edad actual es ${EDAD}`);
}


EdadACTUAL(2022,1984)
*/



/*//6-Usted tiene los siguientes países; COLOMBIA, ARGENTINA, PERÚ, JAPÓN,ALEMANIA, al seleccionar alguno de ellos le va mostrar su capital.


function Capitales(x){

    switch (x) {
        case 'COLOMBIA':
          console.log('La capital de cololmbia es Bogota');
          break;
        case 'ARGENTINA':
          console.log('La capital de Argentina es Buenos Aires');
          break;
        case 'PERÚ':
          console.log('La capital de PERÚ es Lima');
          break;
        case 'JAPÓN':
          console.log('La capital de JAPÓN es Tokio');
          break;
        case 'ALEMANIA':
         console.log('La capital de ALEMANIA es Berlin ');
          break;
        default:
          console.log('El pais digitado no se encuentra en la lista ');
      }  


}

Capitales("JAPÓN")

*/

/*7-Realiza la tabla de multiplicar de su número favorito hasta el número 100.


function Multiplica(x){

     var mult = x;
  for (let index = 0; index <=100; index++) {
      
    var resultado =  mult*index 
    
    console.log(`${resultado}`) 
  }
  

}

Multiplica(2)

*/

/*8- Diccionario de inglés; por favor traduce 5 palabras que quieras al inglés; el usuario las va observar y al seleccionar cualquiera le va mostrar la traducción al inglés.

En la funcion escribe las siguientes palabras para traducirlas al ingles 

. casa 
. carro 
. arbol 
. perro 
. libro 




function Diccionario(x){

    switch (x) {
        case 'casa':
          console.log('house');
          break;
        case 'car':
          console.log('car');
          break;
        case 'arbol':
          console.log('tree');
          break;
        case 'perro':
          console.log('dog');
          break;
        case 'libro':
         console.log('book');
          break;
        default:
          console.log('la palabra no se encuentra  ');
      }  
    }


Diccionario("libro")

*/ 



























