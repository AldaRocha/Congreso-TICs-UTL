using System.ComponentModel.DataAnnotations;

namespace ExamenSegundoParcialServices.Models
{
    public class Avatar
    {
        [Key]
        public int AvatarId { get; set; }
		public string Nombre { get; set; }
        public string UrlImagen { get; set; }
        public byte Activo { get; set; }
    }
}
