// App.jsx
// Componente raiz do English AI App
// Gerencia a navegação entre as telas com React Router

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './LoginPage'
import HomePage from './HomePage'

function App() {
  return (
    // BrowserRouter — habilita a navegação entre telas
    <BrowserRouter>
      <Routes>
        {/* Rota da tela de login */}
        <Route path="/" element={<LoginPage />} />

        {/* Rota da tela home */}
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App