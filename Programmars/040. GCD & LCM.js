function solution(n, m) {
    
    let a = n, b = m;
    while (b !== 0) {
        let remainder = a % b;
        a = b;
        b = remainder;
    }
    const gcd = a;

    const lcm = (n * m) / gcd;

    return [gcd, lcm];
}