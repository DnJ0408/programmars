function solution(num) {
    if (num === 1) { // 입력된 숫자가 1이면
        return 0; // 0을 반환
    }
    
    let steps = 0; // 횟수에 초기값 할당
    
    while (num !== 1) { // 입력된 수가 1이 아니면
        if (num % 2 == 0) { // 짝수일 때
            num /= 2; // 2로 나눈다
        } else { // 홀수라면
            num = num * 3 + 1; // 3을 곱하고 1을 더해준다
        }
        
        steps++ // 단계를 점점 증가시킨다
        
        if (steps > 500) { //  500회가 넘어가면
            return -1; // -1을 반환한다.
        }
    }
    return steps; // 횟수를 반환
}