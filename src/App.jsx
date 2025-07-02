// src/App.jsx

import Navbar from './components/navbar/navbar.jsx'; // Importe o componente que criamos
import './App.css'; // Estilos globais (pode deixar, mas nosso foco é o da navbar)

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Use o componente aqui! */}
      
      {/* O resto do conteúdo do seu site virá abaixo da navbar */}
      <main style={{ padding: '2rem' }}>
        <h1>Página Principal</h1>
        <p>O conteúdo da sua página começa aqui.</p>
      </main>
    </div>
  );
}

export default App;