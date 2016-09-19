Episode 1

var name = 'Keith';
// assigns the String “Keith” to the variable name

var printName = function() {
    console.log('My name is ' + name );
}

// assigns a function, which prints the string and the variable name to the log, to the variable printName, which is then called below

printName();


// output: “My name is Keith”


Episode 2

score = 5;

// assigns the number 5 to the global (scandalous) variable score

var result = function() {
    var score = 3;
    return score;
}

// var score is assign within the result function, so output would be 3?

console.log(result());



Episode 3


// new array assigned to myAnimals

var myAnimals = ['Chickens', 'Cats', 'Rabbits'];


var listAnimals = function() {
    myAnimals = ['Ducks', 'Dogs', 'Lions'];
    for(var i=0;i<myAnimals.length; i++){
      console.log(i + ": " + myAnimals[i]);
    }
}



listAnimals();
// reassigns myAnimals to contain ducks dogs lions?

// output: 0: Ducks 1: Dogs 2: Lions


Episode 4

var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
    var suspectThree = 'Harvey'
    console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
}

allSuspects();
console.log( 'Suspect three is:' + suspectThree )

// Output:
// Suspects include: Jay, Val, Harvey, Rick
// Suspect three is: Keith

Episode 5

var detective = {
        name : 'Ace Ventura',
        pet : 'monkey'
    }

var printName = function(detective) {
    return detective.name
}

var detectiveInfo = function() {
    detective['name'] = 'Poirot'
    return printName(detective);
}

console.log(detectiveInfo());

// output Poirot


Episode 6

var murderer = 'rick';

var outerFunction = function(){
    var murderer = 'marc';

    var innerFunction = function(){
        murderer = 'valerie';
    }

    innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);

// output: rick