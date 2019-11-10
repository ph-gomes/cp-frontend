# Front-end Clubpetro

Projeto desenvolvido como resposta ao desafio de front-end do clubpetro

## Scripts

No diretório do projeto, você pode rodar:

### `npm start`

Irá executar o app em modo de desenvolvimento.<br />
Abra [http://localhost:3000](http://localhost:3000) para visualizar no browser.

## Perguntas bônus

### O que você sabe sobre a diferença entre **Redux** e **React’s context API**? Cite exemplos de casos onde é uma boa opção utilizar ou não.

Redux é uma biblioteca para o JS que permite o gerenciamento de estados entre diferentes componentes que não possuem relação direta entre sí. Além disso permite a separação dos motivos das mudanças de estados e a maneira como essas ocorrem.

React Context API foi criada com o objetivo de compartilhamento de informações entre diferentes componentes evitando o chamado "prop drilling".

Apesar da descrição similar, o Redux adiciona uma camada a mais de complexidade quando o objetivo é simplesmente o compartilhamento de informações, nestes casos é mais adequado o React Context. Entretanto em aplicações em que é necessário ter um controle de como os estados estão sendo alterados o Redux vem para auxiliar nessa tarefa.

### O que você entende sobre o uso de **Hooks** para manipulação de estados entre componentes? Como você qualifica o uso como boas práticas?

Hooks é uma adição ao React 16.8 que permite se escrever aplicações com o React sem a utilização de classes.

Para a manipulação de estados, o Hooks permite uma manipulação mais limpa, uma vez que isola cada estado de maneira mais visual e mais intuitiva.

Os Hooks permitem a geração de um código mais sucinta e mais flexível uma vez que reduz a verbosidade do código além de gerar camadas mais simples após a renderização do mesmo.
