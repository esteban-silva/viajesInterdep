import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavBarElements'
import logo from '../../assets/images/logo.png'

const Navbar = () => {
    return (
        <>
        <Nav>
            <NavLink to="/">
                <img src={logo} alt='logo' />
            </NavLink>
            <Bars />              
            <NavMenu>
                <NavLink to="/ListarDeptos" activeStyle >
                    Lista Departamentos
                </NavLink>
                <NavLink to="/CrearDepto" activeStyle>
                    Crear Departamento
                </NavLink>
            </NavMenu>   
            <NavBtn>
                <NavBtnLink to="/Boton"> Boton </NavBtnLink>
            </NavBtn>  
        </Nav>         
        </>
    )
}

export default Navbar