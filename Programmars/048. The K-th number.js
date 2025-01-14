function solution(array, commands) {
    return commands.map(function (command) {
    const [i, j, k] = command;
    const slicedArray = array.slice(i-1, j);
    slicedArray.sort((a, b) => a - b);
        return slicedArray[k-1];
    });
}