// Importando as dependências necessárias
const express = require("express");
const app = express();
const { DerrotarPlayerAzulObjective, ConquistarEuropaObjective } = require("./Objetivos_Strategy");
const { Mapa} = require('./app/mapa');
const {Player} = require('./app/player');

app.use(express.json());


//Inicializando mapa 
listIdentificationsPlayerMapa = ['%', '$', '*', '#']
mapa = new Mapa();
mapa.nomeMapa = 'Nether Minecraft';


// Rota para definir jogadores
app.post('/setPlayers', (req, res) => {
  try {
    const data = req.body;

    if (data.players.length < 4 && data.players.length > 0) {
      const listPlayers = [];
      const listIdentificationsPlayerMapa = [/* define as identificações conforme necessário */];

      for (let i = 0; i < data.players.length; i++) {
        listPlayers.push(new Player(listIdentificationsPlayerMapa[i], data.players[i], mapa));
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
  for(let i = 0; i < 42; i++){ 
    listTerritories.push(new Territory(i + 1, [0,0]))
  }
  mapa.territories = listTerritories;
  res.json({'mensagem': "Territórios criados com sucesso!"});
})

//Sort territórios entre os jogadores existentes 
app.get('/sortTerritories', (req, res )=> { 
  result = mapa.sortTerritories(); 
  res.json({'mensagem': result});
})

// Rota para obter todos os jogadores cadastrados
app.get("/playersAll_info/", (req, res) => {
    res.status(200).json(mapa.getPlayers());
});

// Rota para obter informações de um jogador específico
app.get("/player_info/:index", (req, res) => {
  const index = parseInt(req.params.index);
  
  if (index >= 0 && index < mapa.getPlayers().length) {
    res.status(200).json(mapa.getPlayers()[index]);
  } else {
    res.status(404).send("Jogador não encontrado.");
  }
});

const server = app.listen(4000, () => {
  console.log(`API RODANDO na porta ${server.address().port}!`);
});

module.exports = { app, server };
