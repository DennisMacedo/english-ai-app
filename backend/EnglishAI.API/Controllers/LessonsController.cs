// LessonsController.cs
// Controller responsável pelas rotas de lições do English AI App
// Busca as lições do banco de dados PostgreSQL via Entity Framework

using Microsoft.AspNetCore.Mvc;
using EnglishAI.API.Data;
using EnglishAI.API.Models;

namespace EnglishAI.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LessonsController : ControllerBase
    {
        // Contexto do banco de dados injetado automaticamente
        private readonly AppDbContext _context;

        public LessonsController(AppDbContext context)
        {
            _context = context;
        }

        // GET api/lessons
        // Retorna todas as lições do banco de dados
        [HttpGet]
        public IActionResult GetLessons()
        {
            var lessons = _context.Lessons.ToList();
            return Ok(lessons);
        }

        // POST api/lessons
        // Adiciona uma nova lição no banco de dados
        [HttpPost]
        public IActionResult CreateLesson(Lesson lesson)
        {
            _context.Lessons.Add(lesson);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetLessons), new { id = lesson.Id }, lesson);
        }
    }
}