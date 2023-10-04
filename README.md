
André Luiz Araujo Carvalho <br>
Giovanna Fonseca da Silva <br>
Renan Hnerique Moreira Batista <br>
Lucas Vinicius Chaves da Silva <br>



# Consumindo APIs do OpenWeatherMap com Node.js

Este projeto demonstra como consumir duas APIs do OpenWeatherMap com Node.js. A primeira API é usada para obter as coordenadas de latitude e longitude de uma cidade com base no nome. A segunda API é usada para obter a sensação térmica e a descrição do clima atual para uma determinada localização.

## Requisitos

* Node.js v16.14.2 ou superior
* Pacote Axios
* Pacote dotenv

## Instalação

npm install

## Configuração

Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis de ambiente:

APPID=YOUR_API_KEY
Q=NOME_DA_CIDADE
LANGUAGE=PT-BR

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

O primeiro serviço da API é usado para obter as coordenadas de latitude e longitude da cidade.
Essas coordenadas são usadas para fazer uma chamada ao segundo serviço da API para obter a sensação térmica e a descrição do clima atual.
Melhorias
O código pode ser melhorado de várias maneiras, incluindo:

Adicionar validação para garantir que as variáveis de ambiente sejam válidas.
Adicionar tratamento de erros para lidar com erros nas chamadas às APIs.
Adicionar suporte para outras unidades de temperatura.
Conclusão
Este projeto é um bom exemplo de como consumir APIs com Node.js.
