// Program.cs
// Ponto de entrada da API do English AI App
// Configura os serviços e o pipeline de requisições

var builder = WebApplication.CreateBuilder(args);

// Adiciona suporte a Controllers
builder.Services.AddControllers();

// Configura o CORS — permite que o frontend React acesse a API
builder.Services.AddCors(options =>
{
    options.AddPolicy("FrontendPolicy", policy =>
    {
        policy.WithOrigins("http://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

// Ativa o CORS
app.UseCors("FrontendPolicy");

// Mapeia as rotas dos controllers automaticamente
app.MapControllers();

app.Run();