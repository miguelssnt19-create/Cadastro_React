import './index.css';
import App from './pages/app/App.jsx';
import Contato from './pages/contato/index.jsx';
import NotFound from './pages/notfound/index.jsx';
import Evento from './pages/event/index.jsx';
import Cadastro from './pages/cadastro/index.jsx';
import Contador from './pages/contador/index.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Router(){
    return(
<BrowserRouter>
      <Routes>
        <Route path='/cadastro' element ={<Cadastro />} />
        <Route path='/evento' element ={<Evento />} />
        <Route path="/" element={<App />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/contador" element={<Contador />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
</BrowserRouter>
    );

}