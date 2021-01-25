const generateCircles = function() {
    // const circle = document.querySelector("div.circle");
    const kotak = document.querySelector("div.kotak");

    let circles = "";
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            // circles += circle.outerHTML;

            if (
                (i == 0 && j < 5) ||
                (i == 2 && j < 5) ||
                (i == 4 && j < 5) ||
                (i == 1 && j == 0) ||
                (i == 3 && j == 4)
            ) {
                circles += "<div class='circle circleBlack'>" + "</div>";
            } else {
                circles += "<div class='circle'>" + "</div>";
            }
        }
        circles += "<br>";
    }
    console.log(circles);
    kotak.innerHTML = circles;
};
const __init = function() {
    generateCircles();
};

__init();