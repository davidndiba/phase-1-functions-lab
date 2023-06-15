// Code your solution in this file!
function distanceFromHqInBlocks(peel) {
    if (peel <42){
        return 42-peel;
    }else{
    return peel-42;
    }  
}
function distanceFromHqInFeet(peel){
    return distanceFromHqInBlocks(peel)* 264;
}
function distanceTravelledInFeet(a,b){
    if (b > a) {
        return (b-a) *264;
    }else
    return (a-b) *264;
}
function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)

    if (distance<=400){
        return 0;
    }
    else if (distance >= 400 && distance <= 2000){
        return (distance -400)*0.02;

    }else if (distance >=2000 && distance<=2500){
        return 2500/100;

    }else{
        return 'cannot travel that far'
    }
}