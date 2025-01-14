function solution(t, p) {
    let result = 0;

    for(let i = 0; i < t.length - p.length + 1; i++) {
        let slicedNum = t.slice(i, i + p.length);
        console.log(slicedNum);
        if(slicedNum <= p) {
            result++;
        }

    }
    return result;
}