import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
// ROUTES
import Inicio from './Routes/Inicio/Inicio';
import Cosas from './Routes/Cosas/Cosas';
import Portafolio from './Routes/Portafolio/Portafolio'
import Gente from './Routes/Gente/Gente';
import Lugares from './Routes/Lugares/Lugares';
import Musica from './Routes/Musica/Musica'
// COMPONENTS
import Head from './Head/Head';
import Foot from './Foot/Foot';
import Background from './Background/Background';
import { DropdownProvider } from './DropdownProvider';

function App() {

  return (
    <div className="App">
      <DropdownProvider>
        <Head />
      </DropdownProvider>
      <main className={'d-flex'}>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/portafolio' element={<Portafolio />} />
          <Route path='/musica' element={<Musica />} />
          <Route path='/cosas' element={<Cosas />} />
          <Route path='/gente' element={<Gente />} />
          <Route path='/lugares' element={<Lugares />} />
        </Routes>
      </main>
      <Foot display='d-none d-md-flex' />
      <Background />
    </div>
  );
}

export default App;