import './App.css';
import Mensaje from './Mensaje.js';


const Description = () => {
  return <h1>Oscar React BootCamp</h1>
}

const App = () => {
  return (
    <div className="App">
      <Mensaje color='red' message='estamos trabajando' />
      <Mensaje color='blue' message='desde un '/>
      <Mensaje color='green' message='modulo con props'/>
      <Description />
    </div>
  );
}

export default App;
