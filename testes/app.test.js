const supertest = require('supertest');
const { app, server } = require('../index');

// Teste para verificar se retorna todos os dados do array playersData
test('Deve verificar se retorna todos os dados do array playersData', async () => {
  // Fazendo uma solicitação GET para a rota '/player_info'
  const response = await supertest(app).get('/player_info');

  // Verificando se a resposta foi bem-sucedida (status 200)
  expect(response.status).toBe(200);

  // Verificando se a resposta contém os dados esperados
  expect(response.body).toEqual([
    { name: 'Player1', objective: 'Objetivo: Conquistar todo território europeu' },
    { name: 'Player2', objective: 'Objetivo: Eliminar todas as tropas dos continentes do player azul' },
  ]);
});

// Teste para verificar se retorna o objetivo específico. Ex: 0, 1...
test('Deve verificar se retorna o objetivo específico. Ex: 0, 1...', async () => {
  const responsePlayer1 = await supertest(app).get('/player_info/0');

  expect(responsePlayer1.status).toBe(200);

  expect(responsePlayer1.body).toEqual({ name: 'Player1', objective: 'Objetivo: Conquistar todo território europeu' });

  const responsePlayer2 = await supertest(app).get('/player_info/1');

  expect(responsePlayer2.status).toBe(200);

  expect(responsePlayer2.body).toEqual({ name: 'Player2', objective: 'Objetivo: Eliminar todas as tropas dos continentes do player azul' });
});

afterAll((done) => {
  server.close(done);
});
