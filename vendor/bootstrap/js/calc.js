
var finalCost = 0;

var estimateSavings = function () {

  var currentUsage = document.getElementById("currentUsage").value;
  document.getElementById("finalCost").innerHTML = finalCost;

  if (1 < currentUsage <= 2000)
  finalCost=(currentUsage*5/100);

  else if (2001 < currentUsage <= 4000) {
  finalCost=(currentUsage*10)/100;
  }

  else if (4001 < currentUsage <= 6000) {
  finalCost=(currentUsage*20)/100;
  }

  else if (currentUsage>6000) {
  finalCost=(currentUsage*30)/100;
  }

  document.getElementById("finalCost").innerHTML = finalCost-543;

  $(document).ready(estimateSavings(){
   $("#button").click(estimateSavings(){
       $("#result").show();
   });
  });
}
