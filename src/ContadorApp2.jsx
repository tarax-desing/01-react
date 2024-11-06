import React, { useState } from 'react'
import PropTypes from 'prop-types'

// value =0 si no recibo value su valor por defecto será 0
export const ContadorApp2 = ({value = 0}) => {
// useState es un hOOK/
//la función controla el valor de la variable
//

const [contador, setcontador] = useState(value)
const contadorClicks = () =>{
  setcontador(contador + 1)
 
}
  return (
    <>
    <h1>contador:</h1>
    <p>{contador}</p>
    <button onClick={contadorClicks}>Contador de clicks</button>
   </>
  )
}
ContadorApp2.prototype = {
  value:PropTypes.number
}