import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Presentation from './components/Presentation';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';  // <-- Import du footer
import './App.css';



function App() {
  const [filter, setFilter] = useState('Tous');
  const [zoomedIndexes, setZoomedIndexes] = useState([]);

  return (
    <div className="App">
      <Navbar />
      <main>
        <Presentation />
        <Skills filter={filter} setFilter={setFilter} />
        <Projects zoomedIndexes={zoomedIndexes} setZoomedIndexes={setZoomedIndexes} />
        <Contact />
      </main>
      <Footer />  {/* <-- Footer ajouté ici */}
    </div>
  );
}

export default App;
