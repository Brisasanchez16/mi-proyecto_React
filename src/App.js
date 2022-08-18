import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import './components/Navbar.css'
import './components/Card.css'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer'
import{BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='category/:idCategory' element = {<ItemListContainer/>}/> 
        <Route path='detail/:id'element={<ItemDetailContainer/>}/> 
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

