using ExamenSegundoParcialServices.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ExamenSegundoParcialServices.Controllers
{
    [Route("api/avatar")]
    public class AvatarController : ControllerBase
    {
        CongresoUTLExamenSPContext DbContext;

        public AvatarController(CongresoUTLExamenSPContext DbContext)
        {
            this.DbContext = DbContext;
        }

        [HttpGet]
        public async Task<ActionResult<List<Avatar>>> Get()
        {
            try
            {
                List<Avatar> lista = await this.DbContext.Avatar.ToListAsync();

                return Ok(lista);
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}
