import { useState } from "react"


export const ItemTarea = ({nombre, visto}) => {
    return(
       
        <li className="fondo-rojo">
            {nombre}
            {visto ? '👌' : '🙈'}
        </li>
     
      
    )
}
