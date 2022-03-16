import userEvent from '@testing-library/user-event';
import React, {Component} from 'react';
import { useState, useEffect, useRef } from "react";
import DepartamentoServices from '../services/DepartamentoServices';
import {TextField, Button} from '@mui/material'



function CrearDeptoComponent() { 
    const [nombreDepto, setnombreDepto] = useState("");
    var nombreOutput = "";

    const mostrarTitulo = () => {
        nombreOutput = nombreDepto
        console.log("nombreOutput queda con el valor de:" + nombreOutput + nombreDepto)
    }

    return(          
         <div>
            <h1> Departamentos </h1>
            <TextField id="nombre-depto" value={nombreDepto} onChange={(e) => setnombreDepto(e.target.value)} label="Nombre Departamento" type="text" />
            <Button onClick={mostrarTitulo} variant="outlined" >
                    Crear Departamento 
            </Button>
            <div>
                <h2> {nombreOutput}  </h2>   
            </div>
        </div>  
        )
};

export default CrearDeptoComponent;