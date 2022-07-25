import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './views/Home';

import {Route,  BrowserRouter as Router, Routes,} from 'react-router-dom';
import allRoutes from './routes/allRoutes';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Router>
          <Routes>
            {/* <Route path='/' element={<Home/>}></Route> */}
            {allRoutes.map((route, index)=>(
            <Route
              exact 
              path={route.path}
              element={<route.component/>}
            />
         ))}

          </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
