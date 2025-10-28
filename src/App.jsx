import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';
import { useState } from "react";
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import './App.css';
import Sidebar from '@/components/Sidebar/Sidebar';
import Inicio from '@/pages/Inicio/Inicio';
import Eduardo from '@/pages/Eduardo/Eduardo';
import Carina from '@/pages/Carina/Carina';
import Simpsons from '@/pages/Simpsons/Simpsons';
import LugaresArgentina from '@/pages/LugaresArgentina/LugaresArgentina';
import RenderTree from '@/pages/RenderTree/RenderTree';
import DiagramaCarpetas from '@/pages/DiagramaCarpetas/DiagramaCarpetas';
import Bitacora from '@/pages/Bitacora/Bitacora';
import '@/styles/_reset.css';
import PageTransition from'@/components/PageTransition/PageTransition';


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <Router>
      <ThemeProvider>
        <ScrollToTop />
        <div className={`app-container ${isSidebarOpen ? 'sidebar-open' : ''}`}>
          <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
          <main id="main-content" className="main-content">
            <PageTransition>
              <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/carina" element={<Carina />} />
                <Route path="/eduardo" element={<Eduardo />} />
                <Route path="/simpsons" element={<Simpsons />} />
                <Route path="/lugares-argentina" element={<LugaresArgentina />} />
                <Route path="/componentes" element={<RenderTree />} />
                <Route path="/carpetas" element={<DiagramaCarpetas />} />
                <Route path="/bitacora" element={<Bitacora />} />
                <Route path="*" element={<h2>Página no encontrada</h2>} />
              </Routes>
            </PageTransition>
          </main>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
