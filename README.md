# Consumindo APIs do OpenWeatherMap com Node.js

Este projeto demonstra como consumir duas APIs do OpenWeatherMap com Node.js. A primeira API é usada para obter as coordenadas de latitude e longitude de uma cidade com base no nome. A segunda API é usada para obter a sensação térmica e a descrição do clima atual para uma determinada localização.

## Equipe

* André Luiz Araujo Carvalho, RA: 2040482212035
* Giovanna Fonseca da Silva  RA: 2040482212026
* Renan Henrique Moreira Batista  RA: 2040482212040
* Lucas Vinicius Chaves da Silva  RA: 2040482212033

## Introdução

O OpenWeatherMap é uma empresa de serviços meteorológicos que fornece APIs para desenvolvedores. Suas APIs permitem que você obtenha dados meteorológicos em tempo real para qualquer lugar do mundo.

Neste projeto, usaremos duas APIs do OpenWeatherMap:

* `geocoding` - Para obter as coordenadas de latitude e longitude de uma cidade com base no nome.
* `weather` - Para obter a sensação térmica e a descrição do clima atual para uma determinada localização.

## Requisitos

* Node.js v16.14.2 ou superior
* Pacote Axios
* Pacote dotenv

## Instalação

Para instalar as dependências do projeto, execute o seguinte comando:

Use o código com cuidado. Saiba mais
npm install

Configuração
Para configurar o projeto, crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis de ambiente:

appid=YOUR_API_KEY <br>
q=NOME_DA_CIDADE <br>
language=PT-BR <br>


Substitua `YOUR_API_KEY` pelo seu token de API do OpenWeatherMap.

## Uso

Para executar o projeto, execute o seguinte comando:

node index


O projeto irá imprimir as seguintes informações:

Condições atuais:
Sensação térmica: 25.0°C
Descrição: Céu claro

Explicação do código
O código usa o pacote axios para fazer as chamadas às APIs do OpenWeatherMap. O pacote dotenv é usado para carregar as variáveis de ambiente do arquivo .env.

O código funciona da seguinte forma:

A primeira API é usada para obter as coordenadas de latitude e longitude da cidade.
Essas coordenadas são usadas para fazer uma chamada ao segundo serviço da API para obter a sensação térmica e a descrição do clima atual.
Melhorias
O código pode ser melhorado de várias maneiras, incluindo:

Adicionar validação para garantir que as variáveis de ambiente sejam válidas.
Adicionar tratamento de erros para lidar com erros nas chamadas às APIs.
Adicionar suporte para outras unidades de temperatura.
Conclusão
Este projeto é um bom exemplo de como consumir APIs com Node.js.
