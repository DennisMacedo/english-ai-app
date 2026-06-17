// LessonsController.cs
// Controller responsável pelas rotas de lições do English AI App
// Retorna as lições disponíveis para o frontend

using Microsoft.AspNetCore.Mvc;

namespace EnglishAI.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LessonsController : ControllerBase
    {
        // GET api/lessons
        // Retorna a lista de lições disponíveis
        [HttpGet]
        public IActionResult GetLessons()
        {
            var lessons = new[]
            {
                new { id = 1, title = "Greetings", level = "A1", module = "Speaking", durationMinutes = 10 },
                new { id = 2, title = "Numbers and Colors", level = "A1", module = "Vocabulary", durationMinutes = 15 },
                new { id = 3, title = "Daily Conversations", level = "A2", module = "Listening", durationMinutes = 20 },
                new { id = 4, title = "Talking About Your Job", level = "B1", module = "Conversation", durationMinutes = 25 }
            };

            return Ok(lessons);
        }
    }
}