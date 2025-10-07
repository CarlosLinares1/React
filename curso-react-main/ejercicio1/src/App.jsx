import './App.css'
import Card from "../componentes/Card";

function App() {
  const items  = ['React', 'JavaScript', 'Vite'];

  return (
    <section>
      <h1>Hola Mundo!</h1>
      <Card title="Mi primer Card" description="Este es el contenido de mi primer card"/>
      <Card title="Mi segunda Card" description="Este es el contenido de mi segunda card"/>
      <ul >
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))
      }
      </ul>
    </section>
  );
}

export default App