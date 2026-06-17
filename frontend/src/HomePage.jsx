// HomePage.jsx
// Tela principal do English AI App após o login
// Exibe os módulos de aprendizado e o progresso do usuário

function HomePage() {
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

      {/* Título dos módulos */}
      <h2 className="text-lg font-semibold mb-4">Módulos</h2>

      {/* Grid de módulos */}
      <div className="grid grid-cols-2 gap-4">

        {/* Módulo Listening */}
        <div className="bg-gray-900 rounded-2xl p-4 border border-gray-800 cursor-pointer hover:border-purple-500 transition-colors">
          <div className="text-3xl mb-3">🎧</div>
          <h3 className="font-semibold text-sm">Listening</h3>
          <p className="text-gray-500 text-xs mt-1">Treinar compreensão auditiva</p>
        </div>

        {/* Módulo Speaking */}
        <div className="bg-gray-900 rounded-2xl p-4 border border-gray-800 cursor-pointer hover:border-purple-500 transition-colors">
          <div className="text-3xl mb-3">🎙️</div>
          <h3 className="font-semibold text-sm">Speaking</h3>
          <p className="text-gray-500 text-xs mt-1">Praticar pronúncia com IA</p>
        </div>

        {/* Módulo Vocabulário */}
        <div className="bg-gray-900 rounded-2xl p-4 border border-gray-800 cursor-pointer hover:border-purple-500 transition-colors">
          <div className="text-3xl mb-3">📚</div>
          <h3 className="font-semibold text-sm">Vocabulário</h3>
          <p className="text-gray-500 text-xs mt-1">Aprender novas palavras</p>
        </div>

        {/* Módulo Conversação */}
        <div className="bg-gray-900 rounded-2xl p-4 border border-gray-800 cursor-pointer hover:border-purple-500 transition-colors">
          <div className="text-3xl mb-3">💬</div>
          <h3 className="font-semibold text-sm">Conversação</h3>
          <p className="text-gray-500 text-xs mt-1">Conversar livremente com IA</p>
        </div>

      </div>

      {/* Botão de lição do dia */}
      <button className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 rounded-2xl transition-colors">
        🚀 Iniciar lição do dia
      </button>

    </div>
  )
}

export default HomePage