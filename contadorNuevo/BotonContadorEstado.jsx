import { useState } from "react"

export const BotonContadorEstado =({valor = 0}) =>{

    
const [veces, setVeces] = useState(valor)
const handleClick = () => useState(valor)
setVeces(veces + 1)


return(
    <>
    <button onClick={handleClick}>Hiciste Click{veces}veces
        </button>
        </>
)
}