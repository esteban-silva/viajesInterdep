import './assets/css/App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Importo componentes
import ListarDeptoComponent from './components/ListarDeptoComponent.js';


function App() {
  return (
    
    // Menu
    <Router>
        <Navbar />    
        <Switch>
          <Route path='/' exact component={ListarDeptoComponent} />
          <Route path='/ListarDeptos' exact component={ListarDeptoComponent} />
          <Route path='/CrearDepto' exact component={ListarDeptoComponent} />
        </Switch>
    </Router>    
         
  );
}


export default App;
