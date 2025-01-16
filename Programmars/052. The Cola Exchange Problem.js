function solution(a, b, n) {
    let total = 0;
        
    while (n >= a) {
        let exchanged = Math.floor(n / a) * b; // 교환한 콜라병의 수
        total += exchanged; // 총합에 추가
        n = (n % a) + exchanged; // 남은병 + 교환한 콜라병
    }
    
    return total;
}