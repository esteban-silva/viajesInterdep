import React from 'react';
import {TextField, Button} from '@mui/material'

function CrearDepartamento() {
    return(
       <div> 
            <TextField  id="depto" label="Nombre Departamento" variant="standard" />
            <Button onClick={console.log("asd")} variant="outlined" >
                Crear Departamento 
            </Button> 
        </div>
    )
}

export default CrearDepartamento;