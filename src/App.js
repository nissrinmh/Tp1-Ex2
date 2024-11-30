// import logo from './logo.svg';
import './App.css';
import Header from'./components/header/header'
import Nav from './components/navigation/navigation';
import Footer from './components/footer/footer';
import Profill from './components/content/profil';

function App() {
  return (
    <div className="App">
      <div className='head'>
        <Header/> 
        <Nav/>
      </div>
        <Profill/>
        <Footer/>
    </div>
  );
}

export default App;
