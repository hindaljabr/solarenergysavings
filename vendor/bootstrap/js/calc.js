
var solarSystem="";

var estimateSavings = function () {

  var currentUsage = document.getElementById("currentUsage").value;
  document.getElementById("solarSystem").innerHTML = solarSystem;

  if (1 < currentUsage && currentUsage <= 4000) {
  solarSystem="1.5 kW";
  }
  else if (4001 < currentUsage && currentUsage <= 6000) {
  solarSystem="3 kW";
  }
  else if (currentUsage > 6000) {
  solarSystem="5 kW";
  }

  document.getElementById("solarSystem").innerHTML = solarSystem;

  var x = document.getElementById("result");
  x.style.display = "block";
}
