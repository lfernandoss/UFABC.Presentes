using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using RestSharp;
using UFABC.ES.Presentes.Models;
using Newtonsoft.Json;

namespace UFABC.ES.Presentes.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }
        public class CadastroDTO
        {
            public int id { get; set; }
            
            public string tipoPresenteado { get; set; }
            public string relacao { get; set; }
            public string tipoDataComemorativa { get; set; }
            public  string personalidade1 { get; set; }
            public  string personalidade2 { get; set; }
        }

        public class PresentesDTO
        {
            public int id2 { get; set; }
            public string nome { get; set; }
            public string descricao { get; set; }
            public string nomePresenteador { get; set; }
            public string nomePresenteada { get; set; }
            public string tipoPresenteado { get; set; }
            public string relacao { get; set; }
            public string tipoDataComemorativa { get; set; }
            public string personalidade1 { get; set; }
            public string personalidade2 { get; set; }
            public string url { get; set; }
        }

        public async Task<IActionResult> enviarSolicitacaoAsync(CadastroDTO cadastro)
        {
            var client = new RestClient("http://localhost:8080");
            var request = new RestRequest("api/cadastro", Method.POST);
            request.RequestFormat = DataFormat.Json;
            request.AddJsonBody(new { tipoPresenteado = $@"{cadastro.tipoPresenteado}",
                relacao = $@"{cadastro.relacao}",
                tipoDataComemorativa = $@"{cadastro.tipoDataComemorativa}",
                personalidade1 = $@"{cadastro.personalidade1}",
                personalidade2 = $@"{cadastro.personalidade2}"
            });
            client.RemoteCertificateValidationCallback = (sender, certificate, chain, sslPolicyErrors) => true;
            var resposta = await client.ExecuteAsync(request);
            CadastroDTO deserializedProduct = JsonConvert.DeserializeObject<CadastroDTO>(resposta.Content);

            return Json(deserializedProduct.id);
        }
        public async Task<IActionResult> buscarSolicitacaoAsync(int idsolicitacao)
        {
            var client = new RestClient("http://localhost:8080");
            var request = new RestRequest($@"/api/sugestao/{idsolicitacao}", Method.GET);
            
            client.RemoteCertificateValidationCallback = (sender, certificate, chain, sslPolicyErrors) => true;
            var resposta = await client.ExecuteAsync(request);
            List<PresentesDTO> deserializedProduct = JsonConvert.DeserializeObject<List<PresentesDTO>>(resposta.Content);

            return Json(deserializedProduct);
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
