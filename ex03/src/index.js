// Create a myPetsArray here
var myPetsArray = ["Dog", "Cat"]; 
// End of myPetsArray

function myArrayFunction(myPets) {
    var myNewPets = [...myPets];

    // Only change code below this line
    myNewPets.push("Bird", "Fish");
    myNewPets.pop();
    myNewPets.shift();
    myNewPets.unshift("Lion");
    for (var i=0; i<myNewPets.length; i++) {
        if(i==0) {
            var firstPet = myNewPets[0];
        
        } else if (i==myNewPets.length-1) {
            var lastPet = myNewPets[myNewPets.length-1]; 
        }
    }

    
    console.log(firstPet);
    console.log(lastPet);
    
    return myNewPets;
    // Only change code above this line
}

console.log(myArrayFunction(myPetsArray));
module.exports = myArrayFunction;
