const distanceFromHqInBlocks = function(pickupLocation){
    if (pickupLocation >=42) {
        return pickupLocation - 42
    } else {
        return 42 - pickupLocation
    }
  }

function distanceFromHqInFeet(distance){
    return distanceFromHqInBlocks(distance) * 264
}

function distanceTravelledInFeet(start, destination){
    if (start>destination){
        let distanceTravelled = start - destination
        return distanceTravelled * 264
    } else if (start<destination) {
        let distanceTravelled = destination - start
        return distanceTravelled * 264
    }
}

function calculatesFarePrice(start, destination){
    let feetAway = distanceTravelledInFeet(start, destination)
    if (feetAway <400){
        return 0
    } else if (feetAway <2000 && feetAway >400) {
        let fourHundredFree = feetAway - 400
        return fourHundredFree  * .02
    } else if (feetAway >2000 && feetAway <2500) {
        return 25
    } else if (feetAway >2500) {
        return "cannot travel that far"
    }
}