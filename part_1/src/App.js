import './App.css';

import Mensaje from './Mensaje';

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20

  return (
    <div>
      <h1>Saludos</h1>
      <Mensaje color='green' nombre='William' />
      <Mensaje color='blue' nombre='Osmar' />
      <Mensaje color='yellow' nombre='Yamil' />
    </div>
  )
}

export default App;
