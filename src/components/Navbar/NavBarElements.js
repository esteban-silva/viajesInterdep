import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
  background: #000;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  padding: 5px 80px 5px 80px;
  z-index: 10;

`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 24px;
  height: 100%;
  cursor: pointer;
    
  &.active {
        color: #15cdfc;
    }

`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  
  //Bara que saca todo los links y deja un dropdown
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: -10px;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right:24px
  width: 100vw;
  white-space: nowrap;
  margin-left: 100px;
  
  @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  justify-content: flex-end;
  width: 100vw;

  @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 7px 14px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
 
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
