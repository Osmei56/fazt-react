import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import { tsPropertySignature } from '@babel/types';

// function Helloworld(props) {
//   return (
//     <div id="hello"> 
//     <p>Mi Nombre es:{ props.name }</p> 
//     <p>Mi Apellido es: { props.lastname }</p>
//     </div>  
//   )
// }

class Helloworld extends React.Component {
  
  state = {
    show: true
  }
  
  toggleShow = () => {
    this.setState({ show: !this.state.show })
  }
  
  render() {
    if (this.state.show) {
      return (
        <div id="hello">
          <h1>{ this.props.name }</h1>
          <h2>{ this.props.lastname }</h2>
          <button onClick={ this.toggleShow }>Cambiar Estado</button>
        </div>
      )
    } else {
      return  <div>
                <h1>No hay elementos para mostrar</h1>
                <button>Cambiar Estado</button>
              </div>
              
    }
  }
} 

function App() {
  return (
    <div className="App">
      <Navigation /> 
      <Helloworld name="Mauricio" lastname="Garay"/>
      <Helloworld name="Juan Manuel" lstname="Roque"/>
      <Helloworld name="Pablito" lastname="Hamann"/>
      <h1 className="display-1">¡Dezerio!</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />  
      </header>
      <div className="container">
        <div className="row mt-4">
          Hola!
        </div>
      </div>
    </div>
    );
  }

export default App;

