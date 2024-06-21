import logo from './logo.svg';
import './App.css';
import helloWord from './components/helloWord';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import frase from './components/frase';
import List from './components/List';

function App() {

  const nome = 'Maria'

  // class é privado, o certo é className nesse caso

  return (
    <div className="App">
      <helloWord />

      <SayMyName nome="Matheus"/>
      <SayMyName nome="João"/>
      <SayMyName nome={nome}/>
      <Pessoa 
      nome="Gabriel" 
      idade="23" 
      profissao="Assistente" foto="https://via.placeholder/150" />

      <List />
    </div>
  )
}

export default App;
