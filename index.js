require("dotenv").config();

const axios = require("axios");

//desestruturar

const { appid, q, url, url2, language } = process.env;

const end = `${url}?appid=${appid}&q=${q}`;

//console.log(end);

axios
  .get(end)
 .then((res) => {
    console.log(res["data"]);

    return res["data"];
  })
  .then((res) => {
    for (let latlon of res) {
      var latitude = latlon.lat;

      var longitude = latlon.lon;

      console.log(`Latitude = ${latlon.lat}`);

      console.log(`Longitude = ${latlon.lon}`);
    }
    const fim = `${url2}?lat=${latitude}&lon=${longitude}&appid=${appid}&lang=${language}`;

    axios
      .get(fim)
      .then((res2) => {
        //console.log(res2["data"]);

        return res2["data"];
      })
      .then((res2) => {
        const feelsLike = res2.main.feels_like;
        const description = res2.weather[0].description;

        console.log("Condições atuais");
        console.log(`Sensação térmica: ${(feelsLike - 273.13)}°C`);
        console.log(`Descrição: ${description}`);
      })
      .catch((error) => {
        console.error("Erro ao obter os dados:", error);
      });
  });
