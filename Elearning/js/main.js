window.addEventListener("load", function () {
    truncateCardTitle();
});

function truncateCardTitle() {
    var cardList = document.getElementsByClassName("card-title");
    for (var i = 0; i < cardList.length; i++) {
        var text = cardList[i].innerHTML;
        var newtext = truncateString(text, 35);
        cardList[i].innerHTML = newtext;
    }
}

function truncateString(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + "...";
    } else {
        return str;
    }
}

/* Sidebar Mini */
var toggleBtn = document.querySelector(".sidebarMini__button");
var slidebarMini = document.querySelector(".sidebarMini");

toggleBtn.addEventListener("click", function(){
    slidebarMini.classList.toggle("is-opened");
});

/* Dark Mode */
var switchBtn = document.querySelector("#checkbox");
var darkMode = document.querySelector("body");

switchBtn.addEventListener("click", function(){
    darkMode.classList.toggle("darkMode");
});