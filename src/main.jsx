import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { UsersApp } from './UserApp'
import { UsersApp2 } from './UsersApp2'

// import { PrimerComponente } from './PrimerComponente'
// import { SegundoComponente } from './SegundoComponente'
// import { ContadorApp } from '../ContadorApp'
// import { ContadorApp2 } from './ContadorApp2'
// import { ListadoApp } from './ListadoApp'
// import {ListadoMap} from './ListadoMap'
// import { BotonContador } from '../ContadorNuevo/BotonContador'
// import { MisContadores } from '../contadorNuevo/MisContadores'




createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* <ContadorApp2 value = {10}/> */}
  <UsersApp2></UsersApp2>
  <hr />

  </StrictMode>,
)
