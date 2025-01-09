function solution(n) {
    let str = n.toString(); // 입력된 숫자를 문자로 변경
    let arr = []; // 배열에 초기값을 할당
    
    for (let i = str.length; i > 0; i--) { // 배열의 길이부터 1까지 반복
        arr.push(Number(str[i-1])); // 배열-1 번째 문자를 숫자로 변경해서 배열에 할당
    }
    return arr;
}