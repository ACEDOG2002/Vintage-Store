//VARIABLES
const sKeep = {
    Home: "/Images/eye.jpeg",
    s1: "/Images/realhand.png",
    s2: "/Images/bucket-cat.png",
    s3: "/Images/skelehand.png"
};
const tinItems = [
   sky = "/Prototype/TinStore/SkyPlunger.png",
   invis ="/Prototype/TinStore/InvisJP.png",
   ball ="/Prototype/TinStore/Semiball.png",
   glasses ="/Prototype/TinStore/AllseeGl.png",
   music ="/Prototype/TinStore/MusicAgram.png",
   tv ="/Prototype/TinStore/TVmeal.png",
   globe ="/Prototype/TinStore/GlobeMaster.png",
   receipt ="/Prototype/TinStore/InfiReceipts.png",
   sweater ="/Prototype/TinStore/PSweater.png",
   dreams ="/Prototype/TinStore/SleepCatcher.png"
]
const pages = ["Home", "s1", "s2", "s3"];
const ex1 = document.getElementById("ex1");
const plhd = document.getElementById("plhd");
const hM = document.getElementsByClassName("Back");
//FUNCTIONS
    //Pages
function showPage(pageToShow) {
    pages.forEach(id => {
        const div = document.getElementById(id);
        div.style.display = (id === pageToShow) ? "block" : "none";
    });
}

    //addInventory
function addInventory(){
$("#s2").html("img src: '" + tinItems + "' ");
}

    //browseSelection
function browseSelection(){
    tinItems.forEach(id => {
        
    })
}
//BUTTONS
    //Get To Shops
document.getElementById("Browse").addEventListener("click", function () {
    const selected = document.getElementById("ShopKeepers").value;
    showPage(selected);
    changeBackground();
});
// Return Home
document.querySelectorAll(".Back").forEach(btn => {
    btn.addEventListener("click", () => {
        showPage("Home");
    });
});


