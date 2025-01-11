//phone_number의 갯수를 파악한다
//뒷자리 4자리를 뺀 나머지 숫자를 *으로 바꿔준다
function solution(phone_number) {
    return `*`.repeat(phone_number.length - 4) + phone_number.slice(-4);
}