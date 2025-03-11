function solution(answers) {
  const student1 = [1, 2, 3, 4, 5];
  const student2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const scores = [0, 0, 0];

  answers.forEach((answer, index) => {
    if (answer === student1[index % student1.length]) scores[0]++;
    if (answer === student2[index % student2.length]) scores[1]++;
    if (answer === student3[index % student3.length]) scores[2]++;
  });

  const maxScore = Math.max(...scores);

  const result = scores
    .map((score, idx) => (score === maxScore ? idx + 1 : null))
    .filter((student) => student !== null);

  return result;
}
