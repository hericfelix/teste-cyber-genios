<h1 align="center">
  Teste Cyber Genios
</h1>

Esta aplicação foi criada para o desafio da Cyber Genios, e o objetivo dela é criar um app de carros, onde é possível fazer a visualização de todos os carros na pagina inicial, e adicionar e editar carros na página da tabela. Como uma API não está sendo utilizada, a adição e edição é resetada toda vez que a pagina é atualizada.

## **Tecnologias**

- <a href="https://pt-br.reactjs.org/" target="_blank">ReactJS</a>
- <a href="https://www.typescriptlang.org/" target="_blank">Typescript</a>
- <a href="https://styled-components.com/" target="_blank">Styled-components</a>
- <a href="https://www.docker.com/" target="_blank">Docker</a>
- <a href="https://react-table-v7.tanstack.com/" target="_blank">React Table V7</a>
- <a href="https://iconify.design/" target="_blank">Iconify</a>

---

## **Instruções**

A aplicação pode ser iniciada localmente com o docker ou diretamente pelo terminal.

### Terminal

Para iniciar pelo terminal, basta clonar o repositório, ir para a pasta raiz do projeto e utilizar o comando `yarn start` ou `npm run start`.

### Docker

Para iniciar pelo docker, siga os seguintes passos:

1.  Vá para a pasta raiz do projeto e crie a imagem. A flag `-t` é para definir o nome da imagem a ser criada.

        docker build -t teste_cyber_genios .

2.  Rode a imagem. A flag `-p` é para definir qual port irá se conectar à port da imagem, sendo `3333` o port do host, e `3000` o port da image.

        docker run -p 3333:3000 teste_cyber_genios

3.  A partir de agora a imagem estará acessivel na porta `3333` do localhost.

        http://localhost:3333/

---

## **Páginas**

`/`

Página onde é possível ver a listagem dos carros cadastrados.

`/table`

Página onde é possível ver a table dos carros cadastrados, e onde pode ser realizada a adição e edição dos carros.
