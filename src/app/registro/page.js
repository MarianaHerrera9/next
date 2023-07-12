'use client'
import {useState} from "react";
import "./registro.css"

export default function Registro () {

  const [state, setState] = useState ({
    usuario: "",
    email: "",
    password: ""

  });

  const handleChange = (event) => {
    const {name, value} = event.target;
    setState({
      ...state,
      [name] : value
    })
  }



    return (
      <div className='container'>

        <input onChange={handleChange} name="usuario" value={state.usuario} type="text" placeholder="mariana1"/>
     
        <input onChange={handleChange} name="email" value={state.email} type="text" placeholder="email"/>
  
        <input name="password" onChange={handleChange} type="password" placeholder="123456"/>
  
      <button >Registrarse</button>
     </div>
    )
  }

  