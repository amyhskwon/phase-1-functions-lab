// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    if (someValue < 42) {
        return 42 - someValue;
    }
    else {
        return someValue - 42;
    }
}

function distanceFromHqInFeet(someValue) {
    const number = distanceFromHqInBlocks(someValue);
    return number * 264;
}

function distanceTravelledInFeet(start, destination) {
    const startInFeet = distanceFromHqInFeet(start)
    const destinationInFeet = distanceFromHqInFeet(destination)
    if (startInFeet < destinationInFeet) {
        return destinationInFeet - startInFeet
    }
    else {
        return startInFeet - destinationInFeet;
    }
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400) {
        return 0;
    } else if (distance < 2000) {
        return 0.02 * (distance-400);
    } else if (distance < 2500) {
        return 25
    } else if (distance > 2500) {
        return "cannot travel that far"
    }
}