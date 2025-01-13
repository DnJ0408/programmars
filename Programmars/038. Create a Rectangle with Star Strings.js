process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const [n, m] = data.split(" ").map(Number); // 입력된 값을 숫자로 변환
    console.log(("*".repeat(n) + "\n").repeat(m).trim());
});