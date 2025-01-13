function solution(strings, n) {
    var answer = [];
    
    for (var i = 0; i < strings.length; i++) {
        strings[i] = strings[i][n] + strings[i]; // i번째 단어의 n번째 글자를 단어 앞쪽에 추가
    }
    
    strings.sort(); // 알파벳 사전순으로 정렬(a - z)
    
    for (var j = 0; j < strings.length; j++) {
        strings[j] = strings[j].slice(1); // 0번째 글자는 자르고 1번째부터 끝까지를 추출해냄
        answer.push(strings[j]); // 추출한 단어를 answer 배열에 넣는다
    }
    return answer;
}