// Importando as dependências necessárias
const express = require("express");
const app = express();
const { DerrotarPlayerAzulObjective, ConquistarEuropaObjective } = require("./Objetivos_Strategy");
const { Mapa} = require('./app/mapa');
const {Player} = require('./app/player');
const {Territory} = require('./app/territory');
const CircularJSON = require('circular-json');

app.use(express.json());


//Inicializando mapa 
listIdentificationsPlayerMapa = ['%', '$', '*', '#']
objetivos = [new DerrotarPlayerAzulObjective, new ConquistarEuropaObjective]
mapa = new Mapa();
mapa.nomeMapa = 'Nether Minecraft';


// Rota para definir jogadores
app.post('/setPlayers', (req, res) => {
  try {
    const data = req.body;
    if (data.players.length < 4 && data.players.length > 0) {
      let listPlayers = [];

      for (let i = 0; i < data.players.length; i++) {
        const l = Math.floor(Math.random() * 2);
        listPlayers.push(new Player(objetivos[l],listIdentificationsPlayerMapa[i], data.players[i], new Mapa()));
      }

      mapa.players = listPlayers;
      const resposta = {"mensagem": "Jogadores adicionados com sucesso!"};
      res.json(resposta);
    } else {
      const resposta = {"mensagem": "Número inválido de Jogadores"};
      res.json(resposta);
    }
  } catch (error) {
    console.error(error);
    const resposta = {"mensagem": "Erro ao processar a requisição"};
    res.status(500).json(resposta);
  }
});

// Rota para definir territórios 
app.get('/setTerritories', (req, res)=> { 
  listTerritories = [];
  
  countTerritoryID = 1
  for(let i = 0; i < 3; i++){
    for (let k = 0; k < 14; k++){ 
      listTerritories.push(new Territory(countTerritoryID, [i,k]));
      countTerritoryID++; 
    } 
  }
  mapa.territories = listTerritories;
  res.json({'mensagem': "Territórios criados com sucesso!"});
});

//Sort territórios entre os jogadores existentes 
app.get('/sortTerritories', (req, res )=> { 
  result = mapa.sortTerritories(); 
  res.json({'mensagem': result});
});


// Rota para obter todos os jogadores cadastrados
app.get("/playersAll_info", (req, res) => {
    playersAll = CircularJSON.stringify(mapa.getPlayers());
    res.status(200).json({'players': JSON.parse(playersAll)});
});

// Rota para obter informações de um jogador específico
app.get("/player_info/:index", (req, res) => {
  const index = parseInt(req.params.index);
  
  if (index >= 0 && index < mapa.getPlayers().length) {
    player = CircularJSON.stringify(mapa.getPlayers()[index])
    res.status(200).json(JSON.parse(player));
  } else {
    res.status(404).send("Jogador não encontrado.");
  }
});

const server = app.listen(4000, () => {
  console.log(`API RODANDO na porta ${server.address().port}!`);
});

module.exports = { app, server };
