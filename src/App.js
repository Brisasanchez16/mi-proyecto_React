import './App.css';
import ItemListContainer from './components/Item/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import './components/NavBar/Navbar.css'
import './components/Card.css'
import ItemDetailContainer from './components/Item/ItemDetailContainer'
import{BrowserRouter, Route, Routes} from 'react-router-dom'
import {CartProvider} from './components/Store/CartContext'
import Cart from './components/Cart/Cart'
import firestoreDB from './services/firebaseConfig';
import UserForm from './components/UseForm/UseForm';

function App() {
  return (
    <div>
      <BrowserRouter>
      
      <CartProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='category/:idCategory' element = {<ItemListContainer/>}/> 
        <Route path='detail/:id'element={<ItemDetailContainer/>}/>
        <Route path="/contact" element={<UserForm />} />
        <Route path='cart' element={<Cart/>}/> 
      </Routes>
      </CartProvider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

