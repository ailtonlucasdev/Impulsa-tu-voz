import Navbar from './components/navbar/navbar.jsx';
import HeroSection from './components/HeroSection/HeroSection.jsx';
import SpecialtiesSection from './components/SpecialtiesSection/SpecialtiesSection.jsx';
import './App.css'; // Estilos globais

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main style={{ padding: '0.1rem' }}>
        <HeroSection></HeroSection>
        <SpecialtiesSection></SpecialtiesSection>
      </main>
    </div>
  );
}

export default App;