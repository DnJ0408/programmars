function solution(k, m, score) {
  let sortedScores = score.sort((a, b) => b - a);

  let profit = 0;

  for (let i = m - 1; i < sortedScores.length; i += m) {
    profit += score[i] * m;
  }

  return profit;
}