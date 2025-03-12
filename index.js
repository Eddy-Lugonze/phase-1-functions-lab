// Code your solution in this file!
// Headquarters location in blocks
const headquarters = 42;

// Function to calculate distance in blocks from HQ
function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(pickupLocation - headquarters);
}

// Function to calculate distance in feet from HQ
function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * 264; // 1 block = 264 feet
}

// Function to calculate distance traveled in feet between two points
function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
}

// Function to calculate fare price based on distance traveled
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0; // Free ride
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; // $0.02 per foot after 400 feet
    } else if (distance > 2000 && distance <= 2500) {
        return 25; // Flat rate of $25 for distances between 2000 and 2500 feet
    } else {
        return "cannot travel that far"; // More than 2500 feet not allowed
    }
}

// Export functions for testing
module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice
};
