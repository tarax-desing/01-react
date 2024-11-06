import { AgregarTarea } from "./componentes/agregarTarea"
import { ItemTarea } from "./componentes/ItemTarea"
import { useState } from "react"



export const ListadoMap = ( )=>{
let listaTareas = [
///listaTareas es el valor inicial
// lista es el valor que el array inicialmente toma el valor de lista tareas ,pero luego se va actualizando con setLista(), que es una función.Aquí las funciones se confunden con las variables.

        {id:1, nombre:"HTML", visto:true},
        {id:2,  nombre:"CSS" ,visto:true},
        {id:3, nombre:"Bootstra", visto:true},
        {id:4, nombre:"JavaScript", visto:true},
        {id:5, nombre:"Git" ,visto:true},
     
        {id:6, nombre:"PHP" ,visto:true},
        {id:7, nombre:"SQL", visto:true},
        {id:8, nombre:"REACT", visto:false},
        {id:9, nombre:"TypeScrip" ,visto:false},
        {id:10, nombre:"Angular" ,visto:false},
            ]
         
        const [lista, setLista] = useState(listaTareas)
        const addRecreo = ()=>{
            setLista([...lista,{id: lista.length +1, nombre:'recreo', visto:false}])
       

        }
        const onAgregarTarea = (nombreTarea) =>{
            let nuevoNombreTarea = nombreTarea.trim()
            if(nuevoNombreTarea < 1) return
            const nuevaTarea = {
                id: lista.length +1,
                nombre: nuevoNombreTarea,
                visto:false
            }
            setLista([...lista,nuevaTarea])
        }

    return(
        <>
    
    <h1>Listado de tareas</h1>
    <ol>
        {
            lista.map(tarea =>
                <ItemTarea key={tarea.id} nombre={tarea.nombre} visto={tarea.visto}/>
            )
        }

    </ol>
    <AgregarTarea agregarTarea={onAgregarTarea}/>
    <button onClick={addRecreo}>Agregar Recreo</button>
    </>
  
    
)
} 