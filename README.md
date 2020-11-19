# Eicon Desafio Front-End

Esse projeto é um desafio de front-end proposto pela empresa [Eicon](http://www.eicon.com.br/) onde o objetivo era criar uma aplicação utilizando o framework [Angular](https://angular.io/) consumindo dados da API - [The Movie DB](https://www.themoviedb.org/).

<strong>Requisitos para o desafio</strong>
- Busca por Filmes.
- Visualização detalhada individual de cada filme.

## Executando o projeto localmente

<strong>Requisitos</strong>
- [Node js](https://nodejs.org/en/) versão 12.18.3.
- [Angular CLI](https://github.com/angular/angular-cli) versão 10.0.0.
- [Git](https://git-scm.com/).

<strong>Clonando esse repositório</strong>

Em um terminal digite o seguinte comando:
- `git clone https://github.com/Kaleo-Stark/Eicon-desafio-front-end.git`.

<strong>Instalando dependências</strong>

Em um terminal navegue para dentro da pasta <strong>Eicon-desafio-front-end/</strong> e digite o seguinte comando:</p>
- `npm i`.

<strong>Configurando chave de API - The Movie DB </strong>

Abra o arquivo: <strong>Eicon-desafio-front-end/src/environments/environments.ts</strong> e coloque a chave dentro das `' '` onde tem um comentário ao lado `//<-- Colocar a chave da API aqui !!!`.

A chave da API é obtida pelo site da <strong>The Movie DB</strong>, [veja sobre na documentação ...](https://developers.themoviedb.org/3/getting-started/introduction)

<strong>Executando o projeto via Angular CLI</strong>

No terminal execute o comando `ng serve`. Em um navegador abra uma pagina no link a seguir `http://localhost:4200/`. Agora você verá como está o projeto ;).
