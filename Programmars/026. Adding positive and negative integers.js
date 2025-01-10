function solution(absolutes, signs) {
    
    let sum = 0;
    
    for (let i = 0; i < absolutes.length; i++) { //0부터 absolutes의 길이-1 까지 반복
        if (signs[i]) { //signs[i]가 양수라면
            sum += absolutes[i]; //sum에 더해주고
        } else { //signs[i]가 음수라면
            sum -= absolutes[i]; //sum에서 absolutes[i]값을 빼준다.
        }
    }
    return sum; //합계를 반환
}