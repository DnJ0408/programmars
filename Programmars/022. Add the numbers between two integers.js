function solution(a, b) {
    
    let min = Math.min(a, b); // 두 수중 작은 값을 할당
    let max = Math.max(a, b); // 두 수중 큰 값을 할당
    
    let sum = 0; // 변수 sum에 초기값 할당
    for (let i = min; i <= max; i++) { // 최소값부터 최대값 까지 반복
        sum += i; // 모든 숫자를 더해준다.
    }
    return sum; // 합계를 반환
}