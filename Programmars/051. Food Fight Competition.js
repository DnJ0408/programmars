// 반복문으로 1부터 food의 길이-1 까지
// answer에 각 인덱스 값의 숫자를 2로 나눈 나머지를 버린 정수(floor(food[i]/2)*2)만큼 추가한다.
// 0을 추가한다.
// 0을 더하기 전 값을 뒤집어 문자를 추가한다.

function solution(food) {
    let answer = '';

  // 1부터 food.length - 1까지 반복
  for (let i = 1; i < food.length; i++) {
    // floor(food[i] / 2) * 2 만큼 i를 추가
    answer += i.toString().repeat(Math.floor(food[i] / 2));
  }

  // 가운데 0 추가
  let result = answer + '0';

  // answer를 뒤집어서 추가
  // reverse는 배열을 뒤집을수 있기 때문에 하나의 문자열을 split으로 나누어야한다.
  result += answer.split('').reverse().join(''); 

  return result;
}