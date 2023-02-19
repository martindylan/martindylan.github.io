import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
// ROUTES
import Inicio from './Routes/Inicio/Inicio';
import Audio from './Routes/Audio/Audio';
import Cosas from './Routes/Cosas/Cosas';
import Gente from './Routes/Gente/Gente';
import Lugares from './Routes/Lugares/Lugares';
// COMPONENTS
import Head from './Head/Head';
import Foot from './Foot/Foot';
import Background from './Background/Background';
import { AppProvider } from './AppProvider';

function App() {

  return (
    <div className="App">
      <AppProvider>
        <Head />
      </AppProvider>
      <main className={'d-flex'}>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/audio' element={<Audio />} />
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