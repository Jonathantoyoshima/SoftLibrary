# Livraria SoftDesign
### Teste Front end Soft

## How to Start
Requisitos:
- Node
- npm ou yarn

Desenvolvimento:
 - em `cd web` executar:
```
    - npm install
    - npm run start
```
 - projeto executa em localhost:3000

 - uso o **jsconfig** pra definir o root dos imports no src. Verifique se o IDE pega as configs.

 Teste:
 - em `cd web` executar:
```
    - npm run test
```
 - projeto executa em localhost:3000

 - uso o **jsconfig** pra definir o root dos imports no src. Verifique se o IDE pega as configs.

Funcionalidades:
1) Login
 - [x] Tela inicial deve ser o login
 - [ ] Não deve ser possível acessar outras telas sem realizar o login
2) Lista de livros
 - [ ] Exibir uma lista com todos os livros cadastrados, com opção para pesquisa
 - [ ] Exibir mais detalhes do livro
 - [ ] Permitir alugar um livro
 - [ ] Não permitir alugar um livro já alugado
3) CRUD de livros
 - [ ] Criar cadastro, edição e remoção de livros
 - [ ] Não deve ser possível editar e remover livros que estão alugados
Premissas:
 - [ ] Os dados do login, livros e alugueis devem ser mock.
 - [ ] Código JS ou TypeScript.
 - [x] Uso de algum Lint
 - [x] Usar repositório público (Bitbucket, Github).
 - [ ] Presença de testes unitários.
Diferencial:
 - [ ] Aplicação no docker
Critérios de Avaliação:
 - [ ] Estruturação do código
 - [ ] Validação das regras de negócio
 - [ ] Presença de testes unitários.
 - [ ] Cuidados com design (UI/UX, responsividade e CSS).
 - [ ] Prazo de 3 dias após o envio desta especificação.

Importante: caso não consiga finalizar completamente o app dentro do prazo estipulado, não
deixe de enviar seu código para nossa avaliação. Envie e comunique o que você desenvolveu e
o que ficou faltando.

OBS: Após o termino da prova, colocar o código em algum repositório público e então informar
nas respostas o caminho onde está a prova para avaliação.
