// Code your solution in this file!

function returnFirstTwoDrivers() {
  let driver = ["Antonia", "Nuru", "Amari", "Mo"];
  let firstTwo = driver.splice(0, 2);
  return firstTwo;
}
function returnLastTwoDrivers() {
  let driver = ["Antonia", "Nuru", "Amari", "Mo"];
  let lastTwo = driver.splice(2, 4);
  return lastTwo;
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
selectingDrivers();
console.log(returnFirstTwoDrivers());
console.log(returnLastTwoDrivers());

function createFareMultiplier(a) {
  let multiplier = a * a;
  return function () {
    return multiplier;
  };
}

function fareDoubler(fare) {
  let doubleFare = fare * 2;
  return doubleFare;
}

function fareTripler(fare) {
  let fareTripler = fare * 3;
  return fareTripler;
}
createFareMultiplier(5);

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
  console.log(returnFirstTwoDrivers);
  return returnFirstTwoDrivers(drivers);
}
