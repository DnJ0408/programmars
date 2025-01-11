function solution(n) {
    
    let waterMelon = [];
    for (let i = 0; i < n; i++){
        if (i % 2 == 0) {
            waterMelon.push(`수`);
        } else {
            waterMelon.push(`박`);
        }
    }
    return waterMelon.join("");
}