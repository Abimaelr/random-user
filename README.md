# Bem vindo ao Random-User 😀

Olá! Esse projeto foi desenvolvido com o intuito de exercitar o consumo de API's e construir uma página dinâmica.

Acesse aqui : [Random-User](https://abimaelr.github.io/random-user/)

> Feito especialmente para COLAB  💖

## Stack ⚙

Foi feito uso de algumas ferramentas para a construção do projeto.

 - [React](https://reactjs.org/)
 - [SASS](https://sass-lang.com/)
 - [Context Api](https://reactjs.org/docs/context.html)
 - [Axios](https://www.npmjs.com/package/axios)
 - [React Bootstrap](https://react-bootstrap.github.io/)
 - [React-Router-Dom](https://reactrouter.com/)
 - [Leaflet Maps](letjs.com)
 - [Leaflet-Geosearch](https://github.com/smeijer/leaflet-geosearch)
 - [React-Reveal](https://react-reveal.com)
 - [Country Flags](https://www.countryflags.io/)
 - [Random User API](https://randomuser.me/)
 - [Line Awesome](https://icons8.com/line-awesome/)

## Métodos 👣

Para a construir um projeto, antes dos códigos,  vem a idealização e planejamento. Podemos visualizar em alguns passos:

 1. Leitura da documentação da Random User API
 2. Tipos de dados que podemos trabalhar
 3. Ideação do projeto
 4. Determinação da Stack
 5. Escolha da paleta de cores
 6. Code 🤘
 
 Aqui temos um ponto importante, a Determinação da Stack foi levado em consideração o que seria ideal a entregar ao usuário levando em consideração as informações que a API Retorna.

## Goals ⚽

 - Aplicativo com navegação
 - Interface Intuitiva
 - Consumir a maioria dos dados da API
 - Realizar poucas requisições
 - Ser responsiva

## Desafios 🧗

Cada projeto é único, e cada problema, único também :D

***~~Problema com o Leaflet~~***

Para atingir um dos objetivos, que é ter uma interface intuitiva, foi optado usar o mapa da Leaflet 🍃.

Esse mapa tem uma versão que é componentizada para usar no React (clique [aqui para acessar](https://react-leaflet.js.org/)). Acontece que ao agrupar todas as dependências utilizadas no projeto, as versões entre as bibliotecas não são compatíveis, e o app quebra.

Para resolver esse problema, foi utilizado a versão padrão da [Leaflet](https://leafletjs.com/), que tem como foco a aplicação no Vanilla JavaScript. Com isso, precisou fazer leves adaptações e fazer o projeto rodar no React.

Essas adaptações foram:

 1. Importar os scripts diretamente no `public/index.html`;
 2. Importar a Instância do Leaflet dentro do componente que vai consumir o mapa;
 3. Carregar o mapa ao iniciar o componente utilizando a Hook `useEffect`.
 
***~~Problema com a API~~***

Uma vez o mapa instalado, foi verificado que a coordenada referente ao usuário não corresponde ao endereço... E agora? Como usar o mapa depois de solucionar isso tudo? 😆

Aí entra o `Leaflet-Geosearch`. Essa é uma Api que faz parte do Leaflet porém tens que instalar por fora.

    npm install leaflet-geosearch
Sim, mas como ela resolve meu problema?

 - A API dos usuários, um dos dados que ela retorna é seu endereço *(Rua, Cidade, Estado, País)*. 
 - A leaflet-geosearch retorna uma lista de possíveis endereços correspondente a pesquisa

E Sass!!! ~~Quer dizer: E Zass!~~ 😹😹😹

**Agora é só juntar as peças!**

Depois foi observado, que nem sempre temos o endereço correspondente à todas informações que o usuário fornece, então a dinâmica é essa:

Pesquisa-se:
 - Cidade, Estado, País
 - Estado, País
 - País
Se a primeira tentativa não retorna nada, pesquisa com a de baixo, e assim sucessivamente.

Então, não é garantia que você visualizará o endereço exato, mas já dá pra ter uma boa noção de onde nosso colega mora :D

## Iniciando o Projeto 👷

Foi utilizado a framework React para componentizar e montar o Front-End!

Para executar em sua máquina, execute os seguintes passos:

 1. `git clone git@github.com:Abimaelr/random-user.git`
 2. `cd random-user`
 3. `npm install`
 4. `npm start`

> Importante instalar as dependências usando o `npm install`,  pois sem ela o projeto não irá rodar!