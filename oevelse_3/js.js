
document.querySelector("button").addEventListener("click", clickFunction);
let attempts = 0;
const rand = Math.floor(Math.random() * 11);

function clickFunction() {
    attempts++;
    let guess = document.querySelector("#tal").value;
    if (guess == rand) {
        alert("Du gættede rigtigt! Det tog dig " + attempts + " forsøg.");
        location.reload();
    } else if (guess < rand) {
        alert("Det rigtige tal er højere.");
    } else {
        alert("Det rigtige tal er lavere.");
    }
}