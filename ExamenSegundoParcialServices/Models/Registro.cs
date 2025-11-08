namespace ExamenSegundoParcialServices.Models
{
    public class Registro
    {
        public int RegistroId { get; set; }
        public int AvatarId { get; set; }
        public virtual Avatar Avatar { get; set; }
        public string Nombres { get; set; }
        public string Apellidos { get;set; }
        public string Correo { get; set; }
        public string Twitter { get; set; }
        public string Ocupacion { get; set; }
        public byte Terminos { get; set; }
    }
}
