//길이가 4 또는 6이고 숫자인 문자열만 true로 리턴한다

function solution(s) {
        
    if (s > 999 && s < 10000) {
        return true;
    } else if (s > 99999 && s < 1000000) {
          return true;
    } else {
        return false;
    }
}