// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective (specialChar = '*') {
    const adjective = ("a hard worker");
    return function(adjective) {
        return `You are ${specialChar}${adjective}${specialChar}!`;
      };
    }
