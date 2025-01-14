function solution(s) {
    var answer = [];
    var lastIndex = {};  // 각 문자의 마지막 등장 위치를 저장할 객체

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (lastIndex[char] === undefined) {
            answer.push(-1);  // 처음 등장한 문자
        } else {
            answer.push(i - lastIndex[char]);  // 이전 등장 위치와의 거리
        }

        lastIndex[char] = i;  // 현재 문자의 위치를 업데이트
    }

    return answer;
}
