import React from 'react';
import GestaoComercialSuperior from './components/GestaoComercialSuperior';
import './App.css';

function App() {
  return (
    <div className="App">

      <main className="app-main">
        <GestaoComercialSuperior />
      </main>

      <footer className="app-footer">
        <p>© 2024 SBS Solution — Consultoria Lean Manufacturing e Logística</p>
      </footer>
    </div>
  );
}

export default App;
