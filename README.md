<center><img src="./logoBrand.png" /></center>
<h1 style="font-size:48px;color:mediumblue">Projeto Full Stack - Chatinip</h1>
<p style="font-size:18px;padding:0px 25px 10px">Projeto Full-stack de mensagens instantâneas. Desenvolvimento Front-End em typescript React Vite e Back-End em typescript com Node em Express e TypeORM com banco de dados PostgreSQL.</p>
<p style="font-size:18px;padding:0px 25px 10px">As principais funcionalidades estão prontas, porém o projeto está em desenvolvimento e ainda há algumas pendentes. Siga o projeto para ficar atualizado com as novidades em seu desenvolvimento.</p>

#

<h2 style="font-size:32px;color:mediumblue">Como instalar o projeto:</h2>

1. Vá ao webiste do <a href="http://nodejs.org" target="_blank">Node.js</a>, faça download da aplicação e instale o servidor para rodar ambos front e back ends.

2. Vá ao webiste do <a href="http://postgresql.org" target="_blank">PostgreSQL</a>, faça download da aplicação e instale o servidor para rodar o banco de dados usado no backend. Anote as informações definidas durante a instalação, como senha e porta de execução do postgre serão necessários na configuração do sistema.

3. Com ambos instalados, execute o SQL Shell (psql) para criar o banco de dados:
   <code>CREATE DATABASE chatinip</code>

4. Renomeie o arquivo <code>.env.example</code> da pasta <b>/backend</b> para <code>.env</code> e edite com as informações definidas por você na configuração do PostgreSQL<pre>
PGHOST=localhost
PGPORT=5432
PGUSER=postgres
PGPASSWORD=suasenha
PGDATABASE=chatinip
SECRET_KEY=TroqueEssaSecrect_key
</pre>

5. Após ter a base de dados criada, execute o <b>Node.js command prompter</b>. Vá até as pastas de <b>/frontend/chatinip</b> e <b>/backend</b> e execute <b>em ambas</b> o comando: <code>npm install</code>

6. Ainda no <b>Node.js command prompter</b>, na pasta <b>/backend</b>, execute o comando para persistirem as migrações da API no banco de dados: <code>npm run typeorm migrations:run -- -d .\src\data-source.ts</code>

7. Por fim, em terminais separados, execute <code>npm start</code> em <b>/backend</b> e <code>npm run dev</code> em <b>/frontend/chatinip</b><pre>{
   "web_url":"http://localhost:5173",
   "api_url":"http://localhost:3030"
   }</pre>

8. Visite a rota <b>/signup</b> no Frontend e crie sua primeira conta de usuário. Ela receberá acesso de administrador para gerenciar o sistema.

<h2 style="font-size:32px;color:mediumblue">Back-End - Chatinip API:</h2>

# /users

<h4><b>POST:</b> Rota disponível sem autenticação ou permissão, usada para cadastro de usuários.</h4>
Request:
<pre>
{
	"name": "Marcelo Henrique",
	"email": "marcelohm@gmail.com",
	"password": "654321"
}
</pre>
Response: <b>201 Created</b>
<pre>
{
	"id": "9af7b068-84b3-4225-97bb-dd7e93eedfbf",
	"name": "Marcelo Henrique",
	"email": "marcelohm@gmail.com",
	"isAdmin": false,
	"createdAt": "2023-04-29T02:10:20.368Z",
	"updatedAt": "2023-04-29T02:10:20.368Z"
}
</pre>

<h4><b>GET:</b> Rota disponível somente para usuário autenticado, usada para listagem de todos os usuários cadastrados.</h4>
Request:
<pre>
{}
</pre>
Response: <b>200 OK</b>
<pre>
[{
		"id": "0255370e-66b5-4c74-a75a-894526cecc2b",
		"name": "System Operator",
		"email": "sysop@mail.com",
		"isAdmin": true,
		"createdAt": "2023-04-29T02:10:17.686Z",
		"updatedAt": "2023-04-29T02:10:17.686Z"
	},
	{
		"id": "30fe4f7a-b299-4bee-bfcf-8a06ed4f3293",
		"name": "Sidnei Barreto",
		"email": "sydbarret@mail.com",
		"isAdmin": false,
		"createdAt": "2023-04-29T02:10:23.188Z",
		"updatedAt": "2023-04-29T02:10:23.188Z"
	}]
</pre>

# /users/profile

<h4><b>GET:</b> Rota disponível somente para usuário autenticado, usada para pegar as informações do próprio usuário.</h4>
Request:
<pre>
{}
</pre>
Response: <b>200 OK</b>
<pre>
{
	"id": "9af7b068-84b3-4225-97bb-dd7e93eedfbf",
	"name": "Marcelo Henrique",
	"email": "marcelohm@gmail.com",
	"isAdmin": false,
	"createdAt": "2023-04-29T02:10:20.368Z",
	"updatedAt": "2023-05-01T13:34:37.038Z"
}
</pre>

# /users/activation/:user_id

<h4><b>GET:</b> Rota disponível somente para usuário autenticado como administrador, usada para ativar/desativar o acesso de usuários ao sistema.</h4>
Request:
<pre>
{}
</pre>
Response: <b>200 OK</b>
<pre>
{
	"id": "10df3970-908d-4c31-abad-fa063c99b4ca",
	"name": "Marcelo Henrique",
	"email": "marcelohm@gmail.com",
	"isAdmin": false,
	"isActive": true,
	"createdAt": "2023-05-08T00:56:44.978Z",
	"updatedAt": "2023-05-08T01:01:15.818Z"
}
</pre>

# /users/:user_id

<h4><b>GET:</b> Rota disponível somente para usuário autenticado, usada para pegar as informações de um usuário pelo id.</h4>
Request:
<pre>
{}
</pre>
Response: <b>200 OK</b>
<pre>
{
	"id": "30fe4f7a-b299-4bee-bfcf-8a06ed4f3293",
	"name": "Sidnei Barreto",
	"email": "sydbarret@mail.com",
	"isAdmin": false,
	"createdAt": "2023-04-29T02:10:23.188Z",
	"updatedAt": "2023-04-29T02:10:23.188Z"
}
</pre>

<h4><b>PATCH:</b> Rota disponível somente para usuário autenticado com permissão de administrador ou dono dos dados, usada para atualizar as informações de um usuário pelo id.</h4>
<pre>
Request:
{
  "name": "Marcelo Marques"
}
</pre>
Response: <b>200 OK</b>
<pre>
{
	"id": "9af7b068-84b3-4225-97bb-dd7e93eedfbf",
	"name": "Marcelo Marques",
	"email": "marcelohm@gmail.com",
	"isAdmin": false,
	"createdAt": "2023-04-29T02:10:20.368Z",
	"updatedAt": "2023-05-01T13:34:37.038Z"
}
</pre>

<h4><b>DELETE:</b> Rota disponível para usuário autenticado com permissão de administrador ou dono dos dados, usada para deletar uma conta de usuário e suas mensagens pelo id.</h4>
Request:
<pre>
{}
</pre>
Response: <b>204 No Content</b>
<pre>
{}
</pre>

# /login

<h4><b>POST:</b> Rota disponível sem autenticação ou permissão, usada para autenticação de usuários.Request:</h4>
<pre>
{
	"email": "marcelohm@gmail.com",
	"password": "654321"
}
</pre>
Response: <b>200 OK</b>
<pre>
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbSI6ZmFsc2UsImlhdCI6MTY3OTcxNjA4MSwiZXhwIjoxNjc5ODAyNDgxLCJzdWIiOiI3YzVhMTg1NC1lMjc4LTRmMTUtYTU1Yi0wM2NhMjgwMTIyYTgifQ.omTR6v2uvR6caKTPkfg4_HfCnhISNq_9bfMa-lXeCyY"
}
</pre>

# /channels

<h4><b>POST</b>: Rota disponível somente para usuário autenticado com permissão de administrador, usada para criar canais de comunicação (salas de bate-papo).</h4>
Request:
<pre>
{
	"name": "Suporte Técnico"
}
</pre>
Response: <b>201 Created</b>
<pre>
{
	"name": "Suporte Técnico",
	"id": "653517cb-34b9-43f6-a487-4fcdaa33c492"
}
</pre>

<h4><b>GET:</b> Rota disponível somente para usuário autenticado, usada para listar canais cadastrados.</h4>
Request:
<pre>
{}
</pre>
Response: <b>200 OK</b>
<pre>
[{
	"id": "ab7e1dc6-a6dd-4482-b244-e1b30405b5ae",
	"name": "Administração"
},
{
	"id": "49f019bc-e70a-4eb5-9789-2f78f006a766",
	"name": "Diretoria"
},
{
	"id": "653517cb-34b9-43f6-a487-4fcdaa33c492",
	"name": "Suporte Técnico"
}]
</pre>

# /channels/:channel_id

<h4><b>GET:</b> Rota disponível somente para usuário autenticado, usada para pegar um canal por id.</h4>
Request:
<pre>
{}
</pre>
Response: <b>200 OK</b>
<pre>
{
	"id": "653517cb-34b9-43f6-a487-4fcdaa33c492",
	"name": "Suporte Técnico"
}
</pre>

<h4><b>PATCH:</b> Rota disponível somente para usuário autenticado como administrador, usada para atualizar o nome de um canal pelo id.</h4>
Request:
<pre>
{
	"name": "Suporte"
}
Response: <b>200 OK</b>
{
	"id": "653517cb-34b9-43f6-a487-4fcdaa33c492",
	"name": "Suporte"
}
</pre>

<h4><b>DELETE:</b> Rota disponível somente para usuário autenticado como administrador, usada para apagar um canal pelo id.</h4>
Request:
<pre>
{}
</pre>
Response: <b>204 No content</b>
<pre>
{}
</pre>

# /messages

<h4><b>POST</b>: Rota disponível somente para usuário autenticado, usada para enviar mensagens, seja para um canal ou diretamente a um usuário.</h4>
Request:
<pre>
{
	"message": "Gratidão pela sua presença!",
	"direct": false,
	"receiver": "7610f15f-7897-4833-97f0-a0e6bd3c95e2"
}
</pre>
Response: <b>201 Created</b>
<pre>
{
	"user": {
		"id": "9af7b068-84b3-4225-97bb-dd7e93eedfbf",
		"name": "Marcelo H. Marques",
		"createdAt": "2023-04-29T02:10:20.368Z"
	},
	"id": "4d585f04-8664-42a8-8812-ccae71e449ab",
	"direct": false,
	"receiver": "7610f15f-7897-4833-97f0-a0e6bd3c95e2",
	"message": "Gratidão pela sua presença!",
	"createdAt": "2023-05-01T13:27:46.673Z",
	"updatedAt": "2023-05-01T13:27:46.673Z"
}
</pre>

<h4><b>GET:</b> Rota disponível somente para usuário autenticado, usada para listar suas mensagens diretas.</h4>
Request:
<pre>
{}
</pre>
Response: <b>200 OK</b>
<pre>
[{
	"id": "d4ea9f26-94f1-4695-88d1-5b2b35d722fa",
	"message": "Faça da vida uma arte, em vez de arte sobre a vida.",
	"direct": true,
	"receiver": "9af7b068-84b3-4225-97bb-dd7e93eedfbf",
	"createdAt": "2023-05-01T13:32:11.432Z",
	"updatedAt": "2023-05-01T13:32:11.432Z",
	"user": {
		"id": "cc80fa3a-7526-4059-b600-66e1f8ffb3cb",
		"name": "Davi Gilmar"
	}
},
{
	"id": "62c075b0-aa78-44ea-9dc6-4e50b9fc45de",
	"message": "Entendo que você não tenha um bom relacionamento com o Rogério.",
	"direct": true,
	"receiver": "30fe4f7a-b299-4bee-bfcf-8a06ed4f3293",
	"createdAt": "2023-05-01T13:35:00.350Z",
	"updatedAt": "2023-05-01T13:35:00.350Z",
	"user": {
		"id": "9af7b068-84b3-4225-97bb-dd7e93eedfbf",
		"name": "Marcelo Marques"
	}
},
{
	"id": "8ccb8a38-c670-4895-bc01-3e9ee9f44646",
	"message": "Everything under the sun is eclipsed by the moon",
	"direct": true,
	"receiver": "9af7b068-84b3-4225-97bb-dd7e93eedfbf",
	"createdAt": "2023-05-01T13:30:48.509Z",
	"updatedAt": "2023-05-01T13:36:09.991Z",
	"user": {
		"id": "30fe4f7a-b299-4bee-bfcf-8a06ed4f3293",
		"name": "Sidnei Barreto"
	}
}]
</pre>

# /messages/:channel_id

<h4><b>GET:</b> Rota disponível somente para usuário autenticado, usada para listar mensagens de um canal pelo id.</h4>
Request:
<pre>
{}
</pre>
Response: <b>200 OK</b>
<pre>
[{
		"id": "415fde01-72df-4746-a091-3ec4dbbacfae",
		"message": "Estou a disposição se precisar de alguma ajuda.",
		"direct": false,
		"receiver": "7610f15f-7897-4833-97f0-a0e6bd3c95e2",
		"createdAt": "2023-05-01T15:06:41.335Z",
		"updatedAt": "2023-05-01T15:06:41.335Z",
		"user": {
			"id": "0255370e-66b5-4c74-a75a-894526cecc2b",
			"name": "System Operator"
		}
	},
	{
		"id": "4d585f04-8664-42a8-8812-ccae71e449ab",
		"message": "Gratidão pela sua presença!",
		"direct": false,
		"receiver": "7610f15f-7897-4833-97f0-a0e6bd3c95e2",
		"createdAt": "2023-05-01T13:27:46.673Z",
		"updatedAt": "2023-05-01T13:27:46.673Z",
		"user": {
			"id": "9af7b068-84b3-4225-97bb-dd7e93eedfbf",
			"name": "Marcelo Marques"
		}
}]
</pre>

<h4><b>PATCH:</b> Rota disponível para usuário autenticado como administrador ou dono da mensagem, usada para editar uma mensagem pelo id.</h4>
Request:
<pre>
{
	"message": "Everything under the sun is eclipsed by the moon"
}
</pre>
Response: <b>200 OK</b>
<pre>
{
	"user": {
		"id": "9af7b068-84b3-4225-97bb-dd7e93eedfbf",
		"name": "Marcelo Marques"
	},
	"id": "8ccb8a38-c670-4895-bc01-3e9ee9f44646",
	"direct": true,
	"receiver": "9af7b068-84b3-4225-97bb-dd7e93eedfbf",
	"message": "Everything under the sun is eclipsed by the moon",
	"createdAt": "2023-05-01T13:30:48.509Z",
	"updatedAt": "2023-05-01T13:36:09.991Z"
}
</pre>

<h4><b>DELETE:</b> Rota disponível somente para usuário autenticado como administrador ou dono da mensagem, usada para apagar uma mensagem pelo id.</h4>
Request:
<pre>
{}
</pre>
Response: <b>204 No content</b>
<pre>
{}
</pre>

#

<h2 style="font-size:32px;color:mediumblue">Front-End - Chatinip Web:</h2>

## Página de entrada (/):

É a página de entrada no sistema, nela você encontra os botões de acesso ao sistema, seja através do registro de um novo usuário, ou pela atenticação de um usuário existente.

## Página de registro (/signup):

Nesta página você encontra o formulário para criar um novo usuário no sistema com suas informações e dados de acesso. É importante usar um email de acesso que seja real para confirmações do sistema e uma senha que possa memorizar.

## Página de acesso (/signin):

Nesta página você encontra o formulário de acesso ao sistema. É preciso enviar a combinação correta de email e password cadastrado na página de registro para obter acesso ao sistema.

## Página principal (/chat):

É a página principal ao acessar o sistema. Concentrado na barra lateral, estão os acessos aos canais, a mensagens enviadas em direto para você e opções para edição de conta e saída do sistema.

## Mensagens de uma sala (/chat?channel=channel_id):

Página de bate de papo de uma sala definda pelo channelId nos paramêtros da URL.

## Mensagens Diretas (/chat?direct=user_id):

Página de bate de papo com um usuário defindo pelo UserId nos paramêtros da URL.
