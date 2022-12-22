import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import HaldaToode from './pages/HaldaToode';
import LisaToode from './pages/LisaToode';
import MuudaToode from './pages/MuudaToode';
import Ostukorv from './pages/Ostukorv';
import Poed from './pages/Poed';
import Seaded from './pages/Seaded';
import Tooted from './pages/Tooted';
import YksikToode from './pages/YksikToode';

function App() {
  return (
    <div className="App">

      <Link to="/">
        <img className="pilt" src="https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg" alt="" />
      </Link>

      <Link to="/ostukorv">
      <button className="nupp">Ostukorvi</button>
      </Link>
      <Link to="/lisa-toode">
      <button className="nupp">Lisa tooted</button>
      </Link>

      <Link to="/halda-toode">
      <button className="nupp">Halda tooteid</button>
      </Link>
      <Link to="/poed">
      <button className="nupp">Poed</button>
      </Link>
      <Link to="/seaded">
      <button className="nupp">Seaded</button>
      </Link>
      <Link to="/tooted">
      <button className="nupp">tooted</button>
      </Link>

      <Routes>
         <Route path='/'  element={ <Avaleht /> }/>
         <Route path='lisa-toode' element={  <LisaToode /> } />
         <Route path='ostukorv' element={ <Ostukorv /> } />
         <Route path='muuda/:i' element={ <MuudaToode /> } />
         <Route path='halda-toode' element={ <HaldaToode /> } />

         <Route path='toode/:index' element={ <YksikToode /> } /> 
         <Route path='tooted' element={ <Tooted /> } />
         <Route path='seaded' element={ <Seaded /> } />
         <Route path='poed' element={ <Poed /> } />
      </Routes>
    </div>
  );
}

export default App;
