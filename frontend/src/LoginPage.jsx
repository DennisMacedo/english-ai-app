// LoginPage.jsx
// Tela de login do English AI App
// Responsável por autenticar o usuário com e-mail e senha

import { useNavigate } from 'react-router-dom'

function LoginPage() {
  const navigate = useNavigate()

  return (
    // Container principal — ocupa a tela toda com fundo escuro
    <div className="min-h-screen bg-gray-950 flex items-center justify-center">

      {/* Card central do formulário */}
      <div className="bg-gray-900 p-8 rounded-2xl w-full max-w-md border border-gray-800">

        {/* Cabeçalho com logo e descrição */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">🎙️ English AI</h1>
          <p className="text-gray-400 mt-2">Aprenda inglês conversando com IA</p>
        </div>

        {/* Formulário de login */}
        <div className="flex flex-col gap-4">

          {/* Campo de e-mail */}
          <input
            type="email"
            placeholder="Seu e-mail"
            className="bg-gray-800 text-white placeholder-gray-500 px-4 py-3 rounded-xl border border-gray-700 focus:outline-none focus:border-purple-500"
          />

          {/* Campo de senha */}
          <input
            type="password"
            placeholder="Sua senha"
            className="bg-gray-800 text-white placeholder-gray-500 px-4 py-3 rounded-xl border border-gray-700 focus:outline-none focus:border-purple-500"
          />

          {/* Botão de entrar — navega para a Home */}
          <button
            onClick={() => navigate('/home')}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl transition-colors">
            Entrar
          </button>

        </div>

        {/* Link para criar conta */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Não tem conta? <span className="text-purple-400 cursor-pointer">Criar conta</span>
        </p>

      </div>
    </div>
  )
}

export default LoginPage