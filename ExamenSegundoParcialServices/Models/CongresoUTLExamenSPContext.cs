using Microsoft.EntityFrameworkCore;

namespace ExamenSegundoParcialServices.Models
{
    public class CongresoUTLExamenSPContext : DbContext
    {
        public CongresoUTLExamenSPContext(DbContextOptions<CongresoUTLExamenSPContext> options) : base(options)
        {

        }

        public DbSet<Avatar> Avatar { get; set; }
        public DbSet<Registro> Registro { get; set; }
    }
}
