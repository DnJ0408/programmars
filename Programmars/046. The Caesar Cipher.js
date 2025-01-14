function solution(s, n) {
    let result = "";
    
    for(let i = 0; i < s.length; i++) {
        let sChar = s.charCodeAt(i);
        
        if (sChar >= 65 && sChar <= 90) {
            sChar += n;
            if (sChar > 90) {
            sChar -= 26;
            }
        } else if (sChar >= 97 && sChar <= 122) {
            sChar += n;
            if (sChar > 122) {
                sChar -= 26;
            }
        }
        newS = String.fromCharCode(sChar);
        result += newS;
    }
    return result;
}