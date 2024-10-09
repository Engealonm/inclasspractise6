function FahrenheittoCelsius(temp) {
  return (5 * (temp - 32)) / 9 + " °C.";
}

console.log(FahrenheittoCelsius(45));
function CelsiustoFahrenheit(temp) {
  return (9 * temp + 32 * 5) / 5 + " °F.";
}
console.log(CelsiustoFahrenheit(60));
function gettime() {
  const d = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[d.getDay()];
  var hours = d.getHours();
  var min = d.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  min = min < 10 ? "0" + min : min;
  var strTime = day + " " + hours + ":" + min + " " + ampm;
  return strTime;
}
console.log(gettime());

function isLeapYear(year) {
  if (year % 400 == 0) {
    return "a leap year";
  } else if (year % 100 == 0) {
    return "is not leap year";
  } else if (year % 4 == 0) {
    return "a leap year";
  } else {
    return "is not leap year";
  }
}
console.log(isLeapYear(2000));
console.log(isLeapYear(2016));
console.log(isLeapYear(1800));
function findSundaysOnJan1() {
  let sundayYears = [];

  for (let year = 2014; year <= 2050; year++) {
    let jan1 = new Date(year, 0, 1);
    if (jan1.getDay() === 0) {
      sundayYears.push(year);
    }
  }

  return {
    years: sundayYears,
    count: sundayYears.length,
  };
}

const result = findSundaysOnJan1();
console.log("Years when January 1st is a Sunday:", result.years);
console.log("Total count:", result.count);
function pos(name, p) {
  let result = name.slice(0, p) + name.slice(p + 1, name.length);
  return result;
}
console.log(pos("Python", 3));
