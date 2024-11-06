import React from 'react'


const texto = ' Esto es un texto'
const numero = 230
const booleano = false
//  cuando una funcion tiene una linea podemos ahorrarnos las llaves y el return
const sumar = () => 3 + 8
const sumar2 = () => {
  return 4 + 8
}
function sumar3(){
  return 6 + 79
}
const objeto = {
  nombre: 'Pepa',
  edad: 33,
}
const fecha = new Date()

export const PrimerComponente = () => {
  return (
    <>
    <h1>Mi primer hola mundo con react</h1>
    <p>soy un párrafo de prueba.</p>
    <p>El valor de la variable entre llaves {texto}</p>
    <h2>El número es: {numero}</h2>
    <h3>El booleano es: {booleano}</h3>
    {/* poner parent.  */}
    <h2>el resultado de la suma es: {sumar3()}</h2>
    <h2>{JSON.stringify(objeto)}</h2>
    <h2>Fecha: {JSON.stringify(fecha)}</h2>
    
    
    </>

  )
}
