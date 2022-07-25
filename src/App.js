import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './views/Home';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;