// Interface
class InterStrategy {
  executeObjective() {}
}

// Objetivos concretos
class DerrotarPlayerAzulObjective extends InterStrategy {

  executeObjective() {
    return `Objetivo: Eliminar todas as tropas dos continentes do player azul`;
  }
}

class ConquistarEuropaObjective extends InterStrategy {

  executeObjective() {
    return `Objetivo: Conquistar todo território europeu`;
  }
}

// Contexto
class Player {
  constructor(objectiveStrategy) {
    this.objectiveStrategy = objectiveStrategy;
  }

  // Executar o objetivo atual
  executeCurrentObjective() {
    return this.objectiveStrategy.executeObjective();
  }

  // Escolher objetivo
  setObjectiveStrategy(objectiveStrategy) {
    this.objectiveStrategy = objectiveStrategy;
  }
}


/*
console.log(objetivo1);const player1 = new Player(new ConquistarEuropaObjective());
const objetivo1 = player1.executeCurrentObjective();

console.log(objetivo1);

player1.setObjectiveStrategy(new DerrotarPlayerAzulObjective());
const objetivo2 = player1.executeCurrentObjective();

console.log(objetivo2);
*/

module.exports = {
  InterStrategy,
  DerrotarPlayerAzulObjective,
  ConquistarEuropaObjective,
  Player,
};
