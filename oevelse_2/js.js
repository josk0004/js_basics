
timeOfDay();

function timeOfDay() {
    let time = new Date().getHours();
    console.log(time);
    if (time < 5) {
        console.log("Godnat");
    } else if (time < 10) {
        console.log("Godmorgen");
    } else if (time < 18) {
        console.log("Goddag");
    } else {
        console.log("Godaften");
    }
}