// Singleton em JavaScript
class Mapa {
    constructor() {
      if (Mapa.instance) {
        return Mapa.instance;
      }
  
      this.nomeMapa = null;
      this.territories = null;
      this.mapaMatriz = [
        ['|', '|', '|', '|', '|', '|', '|', '|', '|', '|', '|', '|', '|', '|'],
        ['|', '|', '|', '|', '|', '|', '|', '|', '|', '|', '|', '|', '|', '|'],
        ['|', '|', '|', '|', '|', '|', '|', '|', '|', '|', '|', '|', '|', '|']
      ];
      this.players = null;
  
      Mapa.instance = this;
  
      return this;
    }
  
    getMapa() {
      return this.mapaMatriz;
    }
  
    getTerritories() {
      return this.territories;
    }
  
    getPlayers() {
      return this.players;
    }
  
    sortTerritories() {
      for (let i = 0; i < this.players.length; i++) {
        let qtdTerritoriosPlayer = 0;
        while (qtdTerritoriosPlayer < 42 / this.players.length) {
          const l = Math.floor(Math.random() * 3);
          const c = Math.floor(Math.random() * 14);
          if (this.mapaMatriz[l][c] === '|') {
            this.mapaMatriz[l][c] = this.players[i].id;
            qtdTerritoriosPlayer += 1;
          }
        }
      }
      return 'Territórios sorteados para cada jogador';
    }
  
    testMapa() {
      let teste = true;
      for (let i = 0; i < this.mapaMatriz.length; i++) {
        for (let c = 0; c < this.mapaMatriz[0].length; c++) {
          if (this.mapaMatriz[i][c] === '|') {
            teste = false;
          }
        }
      }
      if (teste) {
        return 'Mapa ok!';
      } else {
        return 'Mapa com territórios vazios';
      }
    }
  }

  module.exports = { 
    Mapa, 
  }