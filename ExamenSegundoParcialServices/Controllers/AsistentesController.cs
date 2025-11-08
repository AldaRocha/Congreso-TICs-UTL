using ExamenSegundoParcialServices.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ExamenSegundoParcialServices.Controllers
{
    [Route("api/asistentes")]
    public class AsistentesController : ControllerBase
    {
        CongresoUTLExamenSPContext DbContext;

        public AsistentesController(CongresoUTLExamenSPContext DbContext)
        {
            this.DbContext = DbContext;
        }

        [HttpGet]
        public async Task<ActionResult<List<Registro>>> Asistentes()
        {
            try
            {
                List<Registro> lista = await this.DbContext.Registro.Include(p => p.Avatar).ToListAsync();

                return Ok(lista);
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpPost]
        public async Task<ActionResult> Insertar([FromBody] Registro data)
        {
            try
            {
                this.DbContext.Registro.Add(data);
                await this.DbContext.SaveChangesAsync();

                return Ok("Guardado con éxito");
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}
