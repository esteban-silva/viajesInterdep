import axios from 'axios'
let crear = '/crear'
const URL = 'http://localhost:8080/';

class DepartamentoService{
    
    getDepartamento(){
        return axios.get(URL+"listar");
    }

    setDepartamento(depto){
        return  axios({
            method: 'post',
            url: 'http://localhost:8080/crear',
            data: depto
        })

    }

}

export default new DepartamentoService();