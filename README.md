# API de pessoas desaparecidas com GraphQL
 
Api [GraphQL](https://graphql.org/) sobre desaparecimentos desenvolvida em [javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) com uso do [Apollo Server](https://www.apollographql.com/docs/apollo-server/), [Mysql](https://www.mysql.com/) e [Knex](https://knexjs.org/). O projeto possui migrations knex para inserir dados fakes com a biblioteca [Faker](https://www.npmjs.com/package/faker) para fins de testes.

<br/>

## Requisitos
 - [Node](https://github.com/nodejs/node)
 - [Npm](https://github.com/npm/npm) ou [Yarn](https://github.com/yarnpkg/yarn)

<br/>

## 1 - Instalando as dependências do projeto

Na pasta do projeto execute (npm):
~~~bash
npm install
~~~
ou (yarn)
~~~bash
yarn
~~~ 
<br/>

## 2 - Criando tabelas com Knex e povoando com Faker

### 2.1 Crie um banco de dados no seu SGBD com o nome "api-desaparecidos"
~~~sql
CREATE DATABASE api-desaparecidos;
~~~

### 2.2 Ajuste o arquivo knexfile.js na raíz do projeto de acordo com as informações de conexão com o banco de dados criado.

### 2.3 Crie e povoe as tabelas no banco de dados digitando o comando na pasta do projeto:
~~~bash
npm run migrate
~~~
ou
~~~bash
yarn migrate
~~~
<br/>

## 3 - Inicie a API digitando um dos comandos na pasta do projeto:
~~~bash
npm start
~~~
ou
~~~bash
yarn start
~~~
<br/>

## 4 - Teste a API

### 4.1 Abra o GraphQL Playground pelo navegador no endereço http://localhost:4000/
### 4.2 Execute uma consulta como a consulta abaixo:
~~~
query desaparecimentos {
  desaparecimentos{
    codDesaparecimento
    pessoa{
      nome
    }
  }
}
~~~
O resultado deve ser uma coleção de desaparecimentos como o abaixo:
~~~json
{
  "codDesaparecimento": 1,
  "pessoa": {
    "nome": "Paula Oliveira"
  }
}
~~~

Pronto! API GraphQL de desaparecimentos configurada com êxito!