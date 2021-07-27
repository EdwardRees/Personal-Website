const TRUNK = 6;
const TRAFFIC_PRE_MULTIPLIER = 1.7;
const INITIAL = 24;
const TRAFFIC_POST_MULTIPLIER = 1.2;
const CHANGE_POINT = 83.5;

const calculate = (dist, tunnel, trunk, traffic, extra) => {
  let tunnelCost = parseFloat(tunnel);
  let trunkCost = parseInt(trunk) * TRUNK;
  let trafficCostPreChange = parseInt(traffic) * TRAFFIC_PRE_MULTIPLIER;
  let extraCost = parseFloat(extra);

  let change = (parseFloat(dist) - 2 > 0) ? parseFloat(dist) - 2 : 0;
  let initial = INITIAL;
  let numOfUpdates = ((change * 1000) / 200);
  let updates = parseInt(Math.round(numOfUpdates));
  let distCostPreChange = initial + (updates * TRAFFIC_PRE_MULTIPLIER);
  let totalCostPreChange = Math.round((distCostPreChange + tunnelCost + trunkCost + trafficCostPreChange + extraCost) * 100) / 100;


  let trafficCostPostChange = parseInt(traffic) * TRAFFIC_POST_MULTIPLIER;

  let changePostChange = totalCostPreChange > CHANGE_POINT ? ((((totalCostPreChange - tunnelCost - trunkCost - trafficCostPreChange - extraCost) - initial) / TRAFFIC_PRE_MULTIPLIER) * 200 / 1000) - 7 : change;
  changePostChange = Math.round(changePostChange * 100) / 100;
  let numUpdatesPostChange = (changePostChange * 1000) / 200;
  let updatesPostChange = parseInt(Math.round(numUpdatesPostChange))
  let distCostPostChange = totalCostPreChange > CHANGE_POINT ? CHANGE_POINT + (updatesPostChange * TRAFFIC_POST_MULTIPLIER) : distCostPreChange;

  let totalCostPostChange = totalCostPreChange > CHANGE_POINT ? Math.round((distCostPostChange + tunnelCost + trunkCost + trafficCostPostChange + extraCost) * 100) / 100 : totalCostPreChange;

  return totalCostPostChange;
}

const calculateButton = () => {
  let distance = document.getElementById("distance").value;
  let tunnelFee = document.getElementById("tunnelFee").value;  
  let trunkBaggageQuantity = document.getElementById("trunkBaggageNum").value;  
  let trafficWaitTime = document.getElementById("trafficWait").value;
  let extraCosts = document.getElementById("extras").value;
  let res = calculate(distance, tunnelFee, trunkBaggageQuantity, trafficWaitTime, extraCosts);
  if(isNaN(res)){
    res = 24;
  }
  document.getElementById("cost").innerHTML = `<h2><b>Cost:</b> ≈${res}<br/><br/></h2>`
}