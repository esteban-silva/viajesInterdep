import userEvent from '@testing-library/user-event';
import React, {Component} from 'react';
import DepartamentoServices from '../services/DepartamentoServices';




class DepartamentoComponent extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            departamentos:[]
        }
    }
   
        
    componentDidMount(){    
        DepartamentoServices.getDepartamento().then((response)  => {
            this.setState({departamentos: response.data})
    
        });
    }  
    
    render(){
        return(       
                <div>   
                    <h1> Departamentos </h1>
                    <table>
                        <thead>
                            <tr>
                                <td> Id </td>
                                <td> Nombre </td>
                            </tr>
                        </thead>
                        <tbody>
                        {  
                            this.state.departamentos.map((departamentos) => 
                                
                                <tr key={departamentos.id}>
                                    <td>{departamentos.id}</td>
                                    <td>{departamentos.departamentoNombre}</td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>   
        )};
};

export default DepartamentoComponent;