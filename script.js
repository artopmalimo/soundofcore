function setStarRating(rating) {
    const starContainer = document.getElementById("starRating");
    if (!starContainer) return;

    starContainer.innerHTML = "";
    const totalStars = 10;

    for (let i = 1; i <= totalStars; i++) {
        let star = document.createElement("span");
        star.classList.add("star");

        if (i <= Math.floor(rating)) {
            star.innerHTML = "&#9733;"; // Full star
            star.classList.add("full");
        } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
            star.innerHTML = "&#9733;"; // Half star placeholder
            star.classList.add("half");
        } else {
            star.innerHTML = "&#9734;"; // Empty star
        }

        starContainer.appendChild(star);
    }
}
