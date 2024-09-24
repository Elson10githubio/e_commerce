import Navbar from './Partials/Navbar';
import Panier from './Pages/Panier';
import Detail from './Pages/Detail';
import Acceuil from './Pages/Acceuil';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Produits from './Pages/Produits.js';

//C'est JSX
function App() {
  //react n'accepte les objets et les boolean
  return (
    <Router>
      <div className="App container">
        <Navbar />
        <div>
          <Routes>
            <Route exact path='/' Component={Acceuil}/>
            <Route path='/acceuil' Component={Produits}/>
            <Route path='/panier' Component={Panier} />
            <Route path='/detail/:id' Component={(props) => <Detail {...props}/> }/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
