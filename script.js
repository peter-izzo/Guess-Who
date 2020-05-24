var pic = document.querySelectorAll('.pic');
const button = document.getElementById("button");
const ul = document.querySelector("ul");
const li = ul.getElementsByTagName("li");
const input = document.getElementById("input-area");

//Class to organize characters and their traits
class GameCharacter {
    constructor(name, shirt_color, hat, gender, hair) {
        console.log(this);
        this.name = name;
        this.shirt_color = shirt_color;
        this.hat = hat;
        this.gender = gender;
        this.hair = hair;
    }
    //A fun useless method...for now
    introduce() {
        console.log(`Hi I am ${this.name}. I am a ${this.gender} and have ${this.hair} hair and ${this.shirt_color} color shirt`);
    }
}

//Actual characters and their traits
const mario = new GameCharacter('Mario', 'blue', true, 'male', 'brown');
const link = new GameCharacter('Link', 'green', true, 'male', 'blonde');
const luigi = new GameCharacter('Luigi', 'green', true, 'male', 'brown');
const samus = new GameCharacter('Samus', 'blue', false, 'female', 'blonde');
const dio = new GameCharacter('Dio', 'black', false, 'male', 'black');
const hillary = new GameCharacter('Hillary', 'red', false, 'female', 'blonde');
const mario_lopez = new GameCharacter('Mario', 'blue', false, 'male', 'black');
const peppa = new GameCharacter('Peppa', 'red', false, 'female');


//character objects added to an array
const characterArray = [mario, link, luigi, samus,dio, hillary, mario_lopez, peppa];


/*  trying to come up with a function to use as
//  a callback for the characterArray looping.
//  thinking something that will use the this.name
//  to pull the objects name and then creating a div with
//  a class of the objects name
*/
const addToDiv = x => x = this.name

//loops through characterArray and creates a div with class name === it's name
//HAVE TO USE arrayObject.name OTHERWISE DIVS WON'T BE STRINGS
characterArray.forEach(addToDiv);



function inputLength(){
    return input.value.length;
}

// Adds guesses to an unordered list the
function createTraitListElement() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = '';

}

//These functions should target the image then toggle the CSS class

function getEventTarget(e){
	e = e || window.event;
	return e.target || e.srcElement;
};

pic.onclick = function(e) {
    var target = getEventTarget(e).parentNode;
    target.classList.toggle("black-out");
    console.log(e);
};

function addListAfterClick() {
    if (inputLength() > 0) {
        createTraitListElement();
    }
}

function addListAfterKeyPress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createTraitListElement();
    }
}


//Event Listeners for trait guessing
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeyPress);
