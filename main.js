// Hamburgare ikon visa och stänga

function myMenyFunction() {
  var menuBtn = document.getElementById("navMeny");

  if (menuBtn.className === "nav-meny") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-meny";
  }
}
