let buttons = document.querySelectorAll(".reviews_buttons_desktop button");

let [left, right] = buttons

let reviews = document.querySelectorAll(".review");
let i = 0;
left.addEventListener("click", moveLeft);
right.addEventListener("click", moveRight);



function moveLeft() {
    if (i == reviews.length - 1) {
        reviews[i].style.display = "none";
        i = 0;
        reviews[i].style.display = "flex";
    }
}



function moveRight() {
    if (i == 0) {
        reviews[i].style.display = "none";
        i = reviews.length - 1;
        reviews[reviews.length - 1].style.display = "flex";

    } 
}

// ********************************************************************************
// *******************************************************************************