function solution(s) {
    
    let len = s.length;
    
    if (len % 2 === 0) {
        return s.slice(len / 2 - 1, len / 2 + 1);
    } else {
        return s.charAt(Math.floor(len / 2));
    }
}