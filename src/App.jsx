import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import HeroSection from './components/HeroSection/HeroSection.jsx';
import SpecialtiesSection from './components/SpecialtiesSection/SpecialtiesSection.jsx';
import RecommendedCourses from './components/RecommendedCourses/RecommendedCourses.jsx';

// Importação do arquivo de estilo global
import './App.css';

function App() {
  return (
    // O div principal que envolve toda a aplicação
    <div className="App">
      
      {/* O cabeçalho da página, que é o nosso componente Navbar */}
      <Navbar />
      
      {/* A tag <main> envolve todo o conteúdo principal da página */}
      <main>
        <HeroSection />
        <SpecialtiesSection />
        <RecommendedCourses />
      </main>
      
      {/* Um bom próximo passo seria criar e adicionar um componente de rodapé aqui.
        Exemplo: <Footer /> 
      */}
      
    </div>
  );
}

export default App;