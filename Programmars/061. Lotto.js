function solution(lottos, win_nums) {
  const rankMap = {
      6: 1,
      5: 2,
      4: 3,
      3: 4,
      2: 5,
      1: 6,
      0: 6,
  }
  
  const zeroCount = lottos.filter((num) => num === 0).length;
  const matchCount = lottos.filter((num) => win_nums.includes(num) && num !== 0).length;
  
  const bestRank = matchCount + zeroCount;
  const worstRank = matchCount;
  
  const result = [rankMap[bestRank], rankMap[worstRank]];
  
  return result;
}