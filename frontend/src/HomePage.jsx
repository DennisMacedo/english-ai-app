// HomePage.jsx
// Tela principal do English AI App após o login
// Busca as lições do backend C# e exibe os módulos

import { useState, useEffect } from 'react'

function HomePage() {

  // Estado que guarda as lições vindas da API
  const [lessons, setLessons] = useState([])

  // useEffect — executa quando a tela carrega
  // Busca as lições do backend C#
  useEffect(() => {
    fetch('http://localhost:5076/api/lessons')
      .then(res => res.json())
      .then(data => setLessons(data))
  }, [])

  return (
    // Container principal com fundo escuro
    <div className="min-h-screen bg-gray-950 text-white p-6">

      {/* Cabeçalho com boas-vindas */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Olá, Dennis 👋</h1>
          <p className="text-gray-400 text-sm mt-1">Continue de onde parou</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center font-bold">
          D
        </div>
      </div>

      {/* Barra de progresso geral */}
      <div className="bg-gray-900 rounded-2xl p-4 mb-6 border border-gray-800">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-400">Progresso geral</span>
          <span className="text-purple-400 font-semibold">12%</span>
        </div>
        <div className="w-full bg-gray-800 rounded-full h-2">
          <div className="bg-purple-600 h-2 rounded-full" style={{ width: '12%' }}></div>
        </div>
        <p className="text-gray-500 text-xs mt-2">Nível A1 — Iniciante</p>
      </div>

      {/* Título das lições */}
      <h2 className="text-lg font-semibold mb-4">Lições disponíveis</h2>

      {/* Lista de lições vindas da API */}
      <div className="flex flex-col gap-3">
        {lessons.map(lesson => (
          <div
            key={lesson.id}
            className="bg-gray-900 rounded-2xl p-4 border border-gray-800 hover:border-purple-500 transition-colors cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">{lesson.title}</h3>
                <p className="text-gray-500 text-xs mt-1">{lesson.module} · {lesson.durationMinutes} min</p>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-900 text-purple-300">
                {lesson.level}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Botão de lição do dia */}
      <button className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 rounded-2xl transition-colors">
        🚀 Iniciar lição do dia
      </button>

    </div>
  )
}

export default HomePage