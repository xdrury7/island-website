import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import './App.css';
import {Home} from './pages/home_page'
import { Accomadation } from './pages/accomadations';
import { Travel } from './pages/travel_page';
import { Activities } from './pages/activities';
import { FAQ } from './pages/faq';
import CustomNavbar from './components/custom_nav';

function App() {
  return (
    <BrowserRouter>
    <CustomNavbar></CustomNavbar>
        <Routes>
          <Route path ='/island-website' exact element={<Home />}/>
          <Route path ='/accomadations'exact element={<Accomadation/>} />
          <Route path = '/travel' exact element={<Travel/>}/>
          <Route path = '/activities' exact element={<Activities/>}/>
          <Route path = '/faq' exact element={<FAQ/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
