<h1 align="center">API WAR STRATEGY</h1>



<div align="center">
  <strong>🚀 Atividade da disciplina de ESW utilizando conhecimentos de API com Node.js, design pattern strategy e testes unitários para a história, mostre como definir algoritmos para diferentes objetivos de cada jogador. 📚</strong>
</div>

<div align="center">
  <p>Aqui você encontrará informações sobre o projeto, tecnologias utilizadas, instruções para configurar o ambiente de desenvolvimento.</p>
</div>

## 🔭 Visão Geral
Basicamente o codigo permite a implementação de vários objetivos do jogo war e seus algoritimos por meio de classes para jogadores diferentes permitindo assim a dinâmicidade dos mesmos seguindo o padrão strategy e a exibição por meio de uma api no formato json.


## 💻 Tecnologias

- Node.JS
- Java Script 

## 🚀 Executando o Projeto

- Clone o repisitório
  
   ```
   git clone https://github.com/cesaryuri/WAR_API_STRATEGY.git
   ```
- Instalação de dependências
    No terminal do projeto já aberto no vscode, garantindo que já tenha instalado o node.js versão 20 ou maior, execute:
  
   ```
   npm install express
   npm install jest
   ```
- Execute o servidor
    Abra o terminal do vscode na pasta do projeto e digite:

   ```
   node index.js
   ```
- Acesse a aplicação
   Abra o seu navegador ou postman e digite o seguinte endereço para listar todos os players e objetivos disponiveis através de uma requisição get:

  ```
  http://localhost:4000/player_info/
  ```
   No momento há apenas dois objetivos para dois players disponíveis logo só há apenas dois comandos disponiveis dado o índice do array:
  
  ```
  http://localhost:4000/player_info/0
  http://localhost:4000/player_info/1
  ```
  ## 💻 Testes
- Execute o teste
   Execute no vscode o comando:
  
  ```
  npm run test
  ```
   O retorno esperado é:
  
  ![image](https://github.com/cesaryuri/WAR_API_STRATEGY/assets/91036277/e4d1be5e-617c-498f-ab39-0ef62e52215b)
