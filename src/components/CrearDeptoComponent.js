import userEvent from '@testing-library/user-event';
import React, {Component} from 'react';
import { useState, useEffect, useRef } from "react";
import DepartamentoServices from '../services/DepartamentoServices';
import {TextField, Button} from '@mui/material'
import CrearDepartamento from './CrearDepartamento.js';


class CrearDeptoComponent extends Component{

    render(){
        return(       
            <div>   
                <h1> Departamentos </h1>
                <CrearDepartamento/>
            </div>   
        )};
};

export default CrearDeptoComponent;