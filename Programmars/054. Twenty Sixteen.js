function solution(month, day) {
    const year = 2016;
    const date = new Date(year, month - 1, day);
    console.log(date); // 2016-05-23T15:00:00.000Z
    console.log(date.getDay()); // 2
    const daysOfTheWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    
    return daysOfTheWeek[date.getDay()];
}