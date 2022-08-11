import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import './components/Navbar.css'
import './components/Card.css'
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;

