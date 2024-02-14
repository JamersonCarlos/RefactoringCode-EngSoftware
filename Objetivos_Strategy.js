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


module.exports = {
  InterStrategy,
  DerrotarPlayerAzulObjective,
  ConquistarEuropaObjective,
};
