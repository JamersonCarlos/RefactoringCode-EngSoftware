// Importando as dependências necessárias
const express = require("express");
const app = express();
const { DerrotarPlayerAzulObjective, ConquistarEuropaObjective, Player } = require("./Objetivos_Strategy");

app.use(express.json());

// Criar instâncias dos jogadores
const player1 = new Player(new ConquistarEuropaObjective());
const player2 = new Player(new DerrotarPlayerAzulObjective());

// Executar objetivos para obter os textos
const objetivo1 = player1.executeCurrentObjective();
const objetivo2 = player2.executeCurrentObjective();

// Criar array com os dados dos jogadores
const playersData = [
  { name: "Player1", objective: objetivo1 },
  { name: "Player2", objective: objetivo2 },
];

// Rota para obter todos os jogadores cadastrados
app.get("/player_info/", (req, res) => {
    res.status(200).json(playersData);
});

// Rota para obter informações de um jogador específico
app.get("/player_info/:index", (req, res) => {
  const index = parseInt(req.params.index);
  
  if (index >= 0 && index < playersData.length) {
    res.status(200).json(playersData[index]);
  } else {
    res.status(404).send("Jogador não encontrado.");
  }
});

const server = app.listen(4000, () => {
  console.log(`API RODANDO na porta ${server.address().port}!`);
});

module.exports = { app, server };
