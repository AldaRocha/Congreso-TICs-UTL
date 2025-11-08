using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace ExamenSegundoParcialServices.Migrations
{
    /// <inheritdoc />
    public partial class InitialPostgresSetup : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Avatar",
                columns: table => new
                {
                    AvatarId = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Nombre = table.Column<string>(type: "text", nullable: false),
                    UrlImagen = table.Column<string>(type: "text", nullable: false),
                    Activo = table.Column<byte>(type: "smallint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Avatar", x => x.AvatarId);
                });

            migrationBuilder.CreateTable(
                name: "Registro",
                columns: table => new
                {
                    RegistroId = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    AvatarId = table.Column<int>(type: "integer", nullable: false),
                    Nombres = table.Column<string>(type: "text", nullable: false),
                    Apellidos = table.Column<string>(type: "text", nullable: false),
                    Correo = table.Column<string>(type: "text", nullable: false),
                    Twitter = table.Column<string>(type: "text", nullable: false),
                    Ocupacion = table.Column<string>(type: "text", nullable: false),
                    Terminos = table.Column<byte>(type: "smallint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Registro", x => x.RegistroId);
                    table.ForeignKey(
                        name: "FK_Registro_Avatar_AvatarId",
                        column: x => x.AvatarId,
                        principalTable: "Avatar",
                        principalColumn: "AvatarId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Registro_AvatarId",
                table: "Registro",
                column: "AvatarId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Registro");

            migrationBuilder.DropTable(
                name: "Avatar");
        }
    }
}
