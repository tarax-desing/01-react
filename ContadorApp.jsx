const Boton = ()=>{
  return(
    <button>soy un componenteee</button>
  )
}

export const ContadorApp = () => {
  const contador2 = (event) =>{
    console.log(event)
  }
  const handleClick = (event, argumento) =>{
    console.log(argumento)
  }
  return(
    <>
    <h1>contadorrrr</h1>
    <button onClick={contador2 }>Soy un boton</button>
    <button onClick={contador2 }>Soy otro boton</button>
    <button onClick={(event)=> handleClick(event, "Pulsaste el tercer botón") }>Soy otro boton, <br />el tercero</button>
    <Boton/>
    </>
  )
}
