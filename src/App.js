import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';

//Importo componentes
import DepartamentoComponent from './components/DepartamentoComponent.js';



function App() {
  return (
        <header>
   
          <div>
              <DepartamentoComponent />
          </div>
       </header> 
  );
}



export default App;
