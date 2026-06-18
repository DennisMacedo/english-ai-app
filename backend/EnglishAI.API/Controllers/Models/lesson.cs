// Lesson.cs
// Modelo de dados da lição no banco de dados
// Cada propriedade representa uma coluna na tabela

namespace EnglishAI.API.Models
{
    public class Lesson
    {
        // Chave primária — gerada automaticamente pelo banco
        public int Id { get; set; }

        // Título da lição
        public string Title { get; set; } = string.Empty;

        // Nível da lição (A1, A2, B1, B2, C1, C2)
        public string Level { get; set; } = string.Empty;

        // Módulo da lição (Speaking, Listening, Vocabulary, Conversation)
        public string Module { get; set; } = string.Empty;

        // Duração em minutos
        public int DurationMinutes { get; set; }
    }
}