// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  //returns the number of blocks given a value
  if (someValue > 42) {
    return someValue - 42;
  } else {
    return 42 - someValue;
  }
}
function distanceFromHqInFeet(someValue) {
  // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
  // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  const distance = distanceFromHqInBlocks(someValue);
  // the return value of distanceFromHqInBlocks can then be used to calculate feet
  return distance * 264;
}
function distanceTravelledInFeet(start, destination) {
  //returns the number of feet traveled
  if (start < destination) {
    return (destination - start) * 264;
  } else {
    return (start - destination) * 264;
  }
}
function calculatesFarePrice(start, destination) {
  let distance;
  if (start < destination) {
    distance = (destination - start) * 264;
  } else {
    distance = (start - destination) * 264;
  }
  //returns the fare for the customer
  if (distance > 2500) {
    return "cannot travel that far";
  } else if (distance > 2000) {
    return 25;
  } else if (distance > 400) {
    return (distance - 400) * 0.02;
  } else {
    return 0;
  }
}
