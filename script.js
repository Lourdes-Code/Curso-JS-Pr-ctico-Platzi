console.log("Hola desde script.js");

const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.getElementById('pid') //const pid = document.querySelector('#pid') 
const input = document.querySelector('input');

console.log(parrafito);
//<p class="parrafito">Esto es un párrafo con clase</p>
console.log({
    h1, p, parrafito, pid, input
})
/*CON LAS LLAVES {} IMPRIME UN OBJETO CON MUCHAS CLASES:
{h1: h1, p: p, parrafito: p.parrafito, pid: p#pid, input: input}
h1:h1  AL DESPLEGAR CADA UNO MUESTRA LAS PROPIEDADES.
input: input 
p: p
parrafito: p.parrafito
pid: p#pid
[[Prototype]]: Object
*/
console.log(input.value); //Vacío; Si el usuario escribe entrega lo que el usuario escribe.

//Si escribes una etiqueta y pegado un . (punto) das enter o tab; se vuelve clase. 
//ej p#tab va a generar <p id=""></p>

h1.innerHTML = "con innerHTML puedo <br> escribir html desde JS";
p.innerText = "innerText solo <br> puede manipular <br> texto ";

console.log(p.getAttribute('atributoInventado')); // en consola devuelve soyElValor
h2.setAttribute('class', 'newValorAtributo'); // cambiar el valor de un atributo; elemento.setAttribute('nombre clase', 'nuevo valor')

h2.classList.add('nuevoValor'); // class="newValorAtributo nuevoValor"
h2.classList.remove('nuevoValor'); // class="newValorAtributo"
//h2.classList.toggle('')
//h2.classList.contains('')

input.value = "456"; //el usuario igual puede escribir.

document.createElement('img'); // en consola <img>
document.createElement('span'); // en consola <span></span>
//Para que se vea en html y no solo en consola es necesario ingresarlo a un elemento html existente.

const img = document.createElement('img'); //1. crear imagen con createElement
//2. creo atributos para esa imagen
img.setAttribute('src', 
'https://www.mundiario.com/asset/thumbnail,1280,720,center,center//media/mundiario/images/2022/09/06/2022090605221829599.png') 
//3.inserté la imagen dentro de un contenedor que ya existía (en este caso un párrafo)
pid.append(img); //no borra el contenido sino que agrega la imagen después.
// appendChild 

// pid.innerHTML = " ";  Este string vacío borraría lo que hay dentro de ese párrafo



//EVENTOS EN JAVASCRIPT: Con JS cambiar el html luego de escuchar los eventos.

const h3 = document.querySelector('h3');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pInvisible = document.querySelector('#parrafoInvisible');
const form = document.querySelector('#form');
//EL ATRIBUTO en html del input onchange="console.log('cambió el input')" 
// y del btn onclick="myFuncionBtnOnClick() se escriben como función en JS.

/* btn.addEventListener('click', myFuncionBtnOnClick);

function myFuncionBtnOnClick() {
    console.log('Escuchando el evento click');
    let resultado = (Number(input1.value) + parseInt(input2.value));
    //podría ser convertido a integer asi: let resultado = (+input1.value + +input2.value);  UNARY PLUSS OPERATOR (+) Syntax +x
    console.log(resultado);
    pInvisible.innerText = "El resultado es: " + resultado;
} */

// si se escribe un string, el resultado es NaN porque no se podria utilizar Number() ni parseInt()
// OTRA FORMA DE CONVERTIR A NÚMERO: console.log(+input1.value + +input2.value); Se llama Unary plus (+) operator
// FORM utiliza el ultimo boton y lo interpreta de tipo SUBMIT, se recarga la pagina y envía la información.
// hay que utilizar 

form.addEventListener('submit', sumarInputValues); // (habria que cambiar la función.)
function sumarInputValues(event) {
    console.log({event});
    event.preventDefault(); //para que no recargue la página
    let resultado = (Number(input1.value) + parseInt(input2.value));
    console.log(resultado);
    pInvisible.innerText = "El resultado es: " + resultado;
}
//Ahora no escucha el click, sino el submit del formulario.

//OTRA FORMA DE RESOLVER:
// en el html aplicar el atributo al button type="button", no se ejecutará evento submit, se ejecuta la función de click de ese botón.