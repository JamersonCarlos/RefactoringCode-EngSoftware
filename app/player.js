class Player {
    constructor(objectiveStrategy, id, identificationSimbol, name, mapa) {
      this.objectiveStrategy = objectiveStrategy;
      this.id = id; 
      this.identificationSimbol = identificationSimbol; 
      this.name = name; 
      this.mapa = mapa; 
      this.listTerritoryPlayer = [];
    }
  
    executeCurrentObjective() {
      return this.objectiveStrategy.executeObjective();
    }

    setObjectiveStrategy(objectiveStrategy) {
      this.objectiveStrategy = objectiveStrategy;
    }
  }

module.exports = { 
    Player,
}