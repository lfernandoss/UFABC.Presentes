using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using UFABC.ES.Presentes.Models;

namespace UFABC.ES.Presentes.Controllers
{
    public class CadastroController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public CadastroController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Cadastro()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
