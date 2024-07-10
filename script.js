let api_key = "6a76d7ac39a3fea14cf348ab471326d6";
let urlBase = "https://api.openweathermap.org/data/2.5/weather";
const difkelvin = 273.15;

document.getElementById("botonBusqueda").addEventListener("click", () => {
  const ciudad = document.getElementById("ciudadEntrada").value;
  if (ciudad) {
    fetchDatosClima(ciudad);
  }

  function fetchDatosClima(ciudad) {
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
      .then((data) => data.json())
      .then((data) => mostrarDatosClima(data));
  }

  function mostrarDatosClima(data) {
    console.log(data);
    const divDatosclima = document.getElementById('datosClima')
    divDatosclima.innerHTML = ""

    //creamos variables para los datos que mostraremos
    const ciudadinfo = data.name
    const temperatura = data.main.temp
    const climaInfo = data.weather[0].description

    //Creamos los HTML con CreateElement
    const CiudadTitulo = document.createElement("h1")
    CiudadTitulo.textContent = ciudadinfo

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent =`La temperatura es ${parseInt(temperatura - difkelvin) }°C`
    // console.log(temperaturaInfo)

    const Clima = document.createElement("h1")
    Clima.textContent = `El clima es: ${climaInfo}`

    //insertamos el html
    divDatosclima.appendChild(CiudadTitulo)
    divDatosclima.appendChild(temperaturaInfo)
    divDatosclima.appendChild(Clima)


  }
});
