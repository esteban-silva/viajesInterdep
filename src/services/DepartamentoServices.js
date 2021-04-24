import axios from 'axios'

const URL = 'http://localhost:8080/';

class DepartamentoService{
    
    getDepartamento(){
        return axios.get(URL+"listar");
    }

    setDepartamento(){
        return axios.get(URL+"crear")
    }

}

export default new DepartamentoService();