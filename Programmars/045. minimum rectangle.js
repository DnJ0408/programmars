function solution(sizes) {
    let max = 0;
    let min = 0;
    
    for (let i = 0; i < sizes.length; i++) {
        let newMax = Math.max(sizes[i][0], sizes[i][1]);
        let newMin = Math.min(sizes[i][0], sizes[i][1]);
        
        max = Math.max(max, newMax);
        min = Math.max(min, newMin);
    }
    
    let result = max * min;
    return result;
}