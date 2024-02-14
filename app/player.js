class Player {
    constructor(objectiveStrategy, id, name, mapa) {
      this.objectiveStrategy = objectiveStrategy;
      this.symbol_id = id; 
      this.name = name; 
      this.mapa = mapa; 
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