//합계를 초기화한다
//price의 등차수열을 만든다
//반복문으로 i를 price로 나눌수 없는 수를 제외하고
//나머지 수를 price 부터 price * count까지 안에서 더한다
//합계에서 money를 빼준다 그리고 반환한다
//만약 money - sum > 0 이면 0을 반환한다

function solution(price, money, count) {
    let sum = 0;
    
    for (let i = price; i <= price * count; i++) {
        if (i % price == 0)
        sum += i;
    }
    
    let result = sum - money;
    
    if (result < 0) {
        return 0;
    } else {
        return result;
    }
}