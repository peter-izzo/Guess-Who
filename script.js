const pic = document.querySelectorAll('.pic');
const button = document.getElementById("button");
const ul = document.querySelector("ul");
const li = ul.getElementsByTagName("li");
const input = document.getElementById("input-area");

function inputLength(){
    return input.value.length;
}

function createTraitListElement() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = '';

}

function getEventTarget(e){
	e = e || window.event;
	return e.target || e.srcElement;
};

pic.onclick = function(e) {
    let target = getEventTarget(e).parentNode;
    target.classList.toggle("grey-out");
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


button.addEventListener("click", addListAfterClick);


input.addEventListener("keypress", addListAfterKeyPress);
