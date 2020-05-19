let pic = document.querySelector('.pic');

pic.onclick = function(e) {
    var target = getEventTarget(e);
    target.classList.toggle("grey-out");
};
