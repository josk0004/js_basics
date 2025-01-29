
document.querySelector("#øl").addEventListener("click", clickFunction);
document.querySelector("#snaps").addEventListener("click", clickFunction);
document.querySelector("#fanta").addEventListener("click", clickFunction);
document.querySelector("#cola").addEventListener("click", clickFunction);


function clickFunction() {
    console.log(this.alt);
    if (this.alt == "øl" || this.alt == "snaps") {
        console.log("indeholder alkohol");
    } else {
        console.log("alkoholfri");
    }
}