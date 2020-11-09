import VendingMachine from './Components/VendingMachine';
import Snack1 from './Components/Snack1';
import Snack2 from './Components/Snack2';
import Snack3 from './Components/Snack3';
import NavBar from './Components/NavBar';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
    <NavBar />
      <Switch>
        <Route  exact path='/' render= {() => <VendingMachine />}/>
        <Route  exact path='/snack1' render= {() => <Snack1 />}/>
        <Route  exact path='/snack2' render= {() => <Snack2 />}/>
        <Route  exact path='/snack3' render= {() => <Snack3 />}/>
      </Switch>
    </div>
  );
}

export default App;
