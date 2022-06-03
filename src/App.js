import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './componentes/Footer'
import Content from './componentes/content'
import SobreNos from './componentes/sobreNos';



function App() {
  return (
    <div className="App">
      <Header/>
      <div>
        <Content/>
      </div>
      <div>
        <Footer/>
      </div>

      </div>
  );
}

export default App;
