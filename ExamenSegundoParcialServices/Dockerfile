FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src

COPY ["ExamenSegundoParcialServices/ExamenSegundoParcialServices.csproj", "ExamenSegundoParcialServices/"]
RUN dotnet restore "ExamenSegundoParcialServices/ExamenSegundoParcialServices.csproj"

COPY . .
WORKDIR "/src/ExamenSegundoParcialServices"
RUN dotnet publish "ExamenSegundoParcialServices.csproj" -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS final
WORKDIR /app
COPY --from=build /app/publish .

ENTRYPOINT ["dotnet", "ExamenSegundoParcialServices.dll"]