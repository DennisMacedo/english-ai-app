// AppDbContext.cs
// Contexto do banco de dados do English AI App
// Representa a conexão com o PostgreSQL via Entity Framework

using Microsoft.EntityFrameworkCore;
using EnglishAI.API.Models;

namespace EnglishAI.API.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        // Tabela de lições no banco de dados
        public DbSet<Lesson> Lessons { get; set; }
    }
}