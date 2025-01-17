function solution(k, score) {
    const hallOfFame = [];
    
    return score.map(function (score) {
        hallOfFame.push(score);
        hallOfFame.sort(function (a, b) {
            return b - a;
        });
        if (hallOfFame.length > k) {
            hallOfFame.pop();            
        }
        return hallOfFame[hallOfFame.length - 1];
    });
}