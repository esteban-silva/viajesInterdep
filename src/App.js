import './assets/css/App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Importo componentes
import DepartamentoComponent from './components/DepartamentoComponent.js';


function App() {
  return (
    
    // Menu
    <Router>
        <Navbar />    
        <Switch>
          <Route path='/' exact component={DepartamentoComponent} />
          <Route path='/ListarDeptos' exact component={DepartamentoComponent} />
          <Route path='/CrearDepto' exact component={DepartamentoComponent} />
        </Switch>
    </Router>    
         
  );
}


export default App;
