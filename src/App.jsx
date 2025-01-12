import './App.css'
import HomePage from './components/HomePage';
import PululosPage from './components/PululosPage';
import AboutPage from './components/AboutPage';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';

function App() {


  


  return (
    <>

    <BrowserRouter>

      <NavBar/>
      
      <Routes>

        <Route path="/" element={<HomePage/>}/>
        <Route path="/pululos" element={<PululosPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>

        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="/category/:catid" element={<ItemListContainer/>}/>
        
      </Routes>

    </BrowserRouter>

    </>
  )
}

export default App;

