
const Item = ({nombre, visto}) => {
    return(
        <>
        <li>
            {nombre}
            {visto ? '👌' : '🙈'}
        </li>
        <li>
            {nombre}
            {visto && '👌'}
        </li>
        </>
    )
}


export const ListadoApp = ( )=>{
    return (
        <>
    <h1>Lista de tareas</h1>
    <ol>
        <Item nombre="HTML" visto={true}/>
        <Item nombre="CSS" visto={true}/>
        <Item nombre="Bootstra" visto={true}/>
        <Item nombre="JavaScript" visto={true}/>
        <Item nombre="Git" visto={true}/>
        <Item nombre="HTML" visto={true}/>
        <Item nombre="PHP" visto={true}/>
        <Item nombre="SQL" visto={true}/>
        <Item nombre="REACT" visto={false}/>
        <Item nombre="TypeScrip" visto={false}/>
        <Item nombre="Angular" visto={false}/>
    </ol>
    </>
)
} 