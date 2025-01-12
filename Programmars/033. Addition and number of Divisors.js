function solution(left, right) {
    
    let result = 0; //결과 초기값
    for (let i = left; i <= right; i++) { //left부터 right 까지 반복
        if(Number.isInteger(Math.sqrt(i))) { //i의 제곱근이 정수인지 확인
            result -= i; //수를 빼주거나
        } else {
            result += i; //더해준다
        }
    }
    return result;
}