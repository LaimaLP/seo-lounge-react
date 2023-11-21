import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ServicesPage } from './components/pages/ServicesPage';
import { HomePage } from "./components/pages/HomePage";
import { NoPage } from './components/pages/NoPage';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route  path="/services" element={<ServicesPage />} />
          <Route path="*" element={<NoPage />} />

       

          {/* <Route path='/register' element={<RegisterPage />} /> */}
          {/* <Route path='*' element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
