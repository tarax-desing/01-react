
export const BotonContador =({count, aumentarContador}) =>{

    setCount(count + 1)
}
return(
    <>
    <button onClick={aumentarContador}>Hiciste Click{count}veces
        </button>
        </>
)
