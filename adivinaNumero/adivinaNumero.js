/*Generar numero aleatorio */
/*Math.random genera un numero aleatorio entre el 0 y el 1 (0.2,0.765,0.383,...)
Math.floor quita los decimales
*/
let randomNumber = Math.floor(Math.random() *100) + 1;

console.log(randomNumber);

//Guardar las referencias a cada parrafo.
const guesses= document.querySelector('.guesses');
const lastResult= document.querySelector('.lastResult');
const lowOrHi= document.querySelector('.lowOrHi');

//Guardar las referencias del input y del boton

const guessSubmit= document.querySelector('.guessSubmit');
const guessField= document.querySelector('.guessField');

//Variables para los intentos
let guessCount=1;

//Variable para crear el boton reset
let resetButton;

//Funcion para comprobar el numero introducido

function checkGuess()
{
    //Guaradamos el numero introducido y nos aseguramos de que se de tipo Number
    let userGuess =Number(guessField.value);

    //Comprobamos si estamos en el primer intento
    if(guessCount ===1)
    {
        guesses.textContent="Intentos Anteriores";
    }
    guesses.textContent += userGuess + " ";

    //Bloque para comprobar si hemos acertado o no el numero aleatorio.
    if(userGuess === randomNumber)
    {
        lastResult.textContent = "Felicidados has acertado";
        lastResult.style.backgroundColor=" green ";
        lowOrHi.textContent= " ";
        setGameOver();
    }
    else
     if(guessCount === 10)
     {
        lastResult.textContent = "Ohh! GAME OVER!";
        setGameOver();
     }
     else
      {
        lastResult.textContent = "Incorecto!";
        lastResult.style.backgroundColor = "red";
        //Comprobamos si el numero es mayor o menor que aleatorio,para dar ayda el jugador.
        if(userGuess < randomNumber)
        {
            lowOrHi.textContent= "El numero es muy bajo";
        }
        else
         if(userGuess > randomNumber)
         {
            lowOrHi.textContent = "El numero es muy alto";
         }
      }

      //Preparamos las variables para el siguiente intento
      guessCount ++;
      //Vaciamos el valor del campo numerico
      guessField.value= " ";
      //Aplicamos el foco nuevamente al input
      guessField.focus();
}

//Agregamos un listener al boton guessSubmit
guessSubmit.addEventListener('click',checkGuess);

//Creamos la funcion gameOver()

function setGameOver(){
    guessField.disabled = true; //Deshabilita el input
    guessSubmit.disabled = true; //Deshabilita el boton submit

    //Crear un nuevo boton para resetar el juego
    resetButton = document.createElement('button');
    resetButton.className = 'resetButton';
    resetButton.textContent = "Reiniciar Juego";
    //Colocamos el boton en el elemento body
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

//funcion para resetar el programa
function resetGame(){
    guessCount = 1;
    //tomamos todos lor parrafos de ayuda
    const resetParas = document.querySelectorAll('.resultParas p');
    for (let i=0; i<resetParas.length; i++){
        resetParas[i].textContent = "";
        resetParas[i].style.backgroundColor = 'black'
    }
    //Eliminamos el boton reset
    resetButton.parentNode.removeChild(resetButton);

    //reactivo el input y el boton de intentos
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    lastResult.style.backgroundColor = 'black';
    randomNumber = Math.floor(Math.random() * 100) +1
}