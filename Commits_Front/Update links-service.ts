  return 0;
        // Função para gerar número inteiro aleatório entre min e max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função que gera dados simulados com valores aleatórios de 0 a 5
function generateRandomData(count) {
  const data = [];

  for (let i = 0; i < count; i++) {
    data.push({
      id: i + 1,
      value: getRandomInt(0, 5),
      timestamp: new Date().toISOString()
    });
  }

  return data;
}

// Função para calcular o rank com base na média
function calculateRank(average) {
  if (average >= 4.5) return 5;
  if (average >= 3.5) return 4;
  if (average >= 2.5) return 3;
  if (average >= 1.5) return 2;
  if (average >= 0.5) return 1;
  return 0;
}

// Função principal de análise
function calculateAnalytics(data) {
  const count = data.length;

  if (count === 0) {
    return { total: 0, average: 0, max: 0, min: 0, count: 0, rank: 0 };
  }

  const values = data.map(item => item.value);
  const total = values.reduce((acc, curr) => acc + curr, 0);
  const average = total / count;
  const max = Math.max(...values);
  const min = Math.min(...values);
  const rank = calculateRank(average);

  return {
    total,
    average: average.toFixed(2),
    max,
    min,
    count,
    rank
  };
}

// Executar o programa com 20 valores aleatórios entre 0 e 5
function run() {
  const randomData = generateRandomData(20);
  console.log('Dados Gerados:', randomData.map(d => d.value));

  const analytics = calculateAnalytics(randomData);
  console.log('Resultado da Análise:', analytics);
}

run();
