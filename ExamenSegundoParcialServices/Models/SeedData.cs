using Microsoft.EntityFrameworkCore;

namespace ExamenSegundoParcialServices.Models
{
    public static class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new CongresoUTLExamenSPContext(
                serviceProvider.GetRequiredService<
                DbContextOptions<CongresoUTLExamenSPContext>>()))
            {
                if (context.Avatar.Any())
                {
                    return;
                }

                context.Avatar.AddRange(
                    new Avatar
                    {
                        Nombre = "Avatar 1",
                        UrlImagen = "https://img.freepik.com/psd-gratis/ilustracion-3d-avatar-o-perfil-humano_23-2150671142.jpg?t=st=1762549974~exp=1762553574~hmac=144585dcb062b23d5651095271148db580d7942066197c1f6c84779c14a398c6&w=1480",
                        Activo = 1
                    },
                    new Avatar
                    {
                        Nombre = "Avatar 2",
                        UrlImagen = "https://img.freepik.com/psd-gratis/ilustracion-3d-avatar-linea_23-2151303097.jpg?t=st=1762550031~exp=1762553631~hmac=06340209c2fc0d60b7ed77790dc3785d602a5df5cd273b279479ffe75285775d&w=1480",
                        Activo = 1
                    },
                    new Avatar
                    {
                        Nombre = "Avatar 3",
                        UrlImagen = "https://img.freepik.com/psd-gratis/ilustracion-3d-avatar-o-perfil-humano_23-2150671116.jpg?t=st=1762550069~exp=1762553669~hmac=1de8bde687c63ca98e2ed4f8b95d4b07bb4f337e8937a1122b68509bf9b973f6&w=1480",
                        Activo = 1
                    }
                );

                context.SaveChanges();
            }
        }
    }
}
