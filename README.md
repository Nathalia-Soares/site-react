# Projeto Retro Games React

![HTML Badge](https://img.shields.io/badge/HTML-5-orange) ![CSS Badge](https://img.shields.io/badge/CSS-3-blue) ![JavaScript Badge](https://img.shields.io/badge/JavaScript-ES6-yellowgreen) ![React Badge](https://img.shields.io/badge/React-18.2.0-blue)


## Descrição

Este projeto é uma aplicação web com um layout retro em React, utilizando HTML, CSS, e JavaScript. Este projeto foi desenvolvido para a disciplina Laboratorio de Desenvolvimento Web, compondo a grade do 4 semestre do curso de Desenvolvimento de Software Multiplataforma, na Fatec Cotia. A estrutura do layout inclui uma barra de navegação à esquerda, um conteúdo principal centralizado e um painel lateral à direita.

## Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript**
- **React**

## Layout

Abaixo estão as seções principais do layout do projeto:

1. **Cabeçalho**: O componente `header` está posicionado acima da página, contendo o título da mesma.
1. **Navegação Vertical**: O componente `nav` está posicionado à esquerda e apresenta itens de navegação empilhados verticalmente.
2. **Conteúdo Principal**: O componente `main` ocupa o espaço central, oferecendo uma área principal para o conteúdo.
3. **Painel Lateral**: O componente `aside` está posicionado à direita e pode conter informações adicionais ou links.
1. **Rodapé**: O componente `footer` está posicionado abaixo da página, com informações do ano e da autora do projeto.

### Layout Visível

![Layout](./src/assets/images/layout.png)

## Estrutura de Diretórios

/ ├── public/ │ ├── index.html │ └── favicon.ico ├── src/ │ ├── assets/ │ │ ├── images/ │ │ │ ├── layout.png │ │ │ └── games/ │ │ │ ├── 01.jpg │ │ │ └── 02.jpg │ ├── components/ │ │ ├── Header.js │ │ ├── Nav.js │ │ ├── Main.js │ │ ├── Aside.js │ │ └── Footer.js │ ├── App.js │ ├── index.js │ └── styles/ │ ├── App.css │ └── index.css ├── .gitignore ├── package.json ├── README.md └── LICENSE

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](./LICENSE) para mais detalhes.
