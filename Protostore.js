//VARIABLES
const pages = [ "s2"];
const ex1 = document.getElementById("ex1");
const hM = document.getElementsByClassName("Back");
//FUNCTIONS
    //Pages
function showPage(pageToShow) {
    pages.forEach(id => {
        const div = document.getElementById(id);
        div.style.display = (id === pageToShow) ? "block" : "none";
    });

}

//BUTTONS
    //Get To Shops
document.getElementById("Browse").addEventListener("click", function () {
    const selected = document.getElementById("ShopKeepers").value;
    showPage(selected);
});
    // Return Home
document.querySelectorAll(".Back").forEach(btn => {
    btn.addEventListener("click", () => {
        showPage("Home");
    });
});
    //Items & Descriptions
 document.getElementById("items").addEventListener("click", function () {
const sel = document.getElementById("items");
const img = document.getElementById("plhd");
img.src = sel.value;
});

