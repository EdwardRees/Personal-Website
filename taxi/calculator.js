$("#calculate").click(function() {
    var dist = $("#distance").val();
    var tunnel = $("#tunnelFee").val();
    var tunnelCost = parseFloat(tunnel)
    var trunk = $("#trunkBaggageNum").val();
    var trunkCost = parseInt(trunk) * 6
    var traffic = $("#trafficWait").val();
    var trafficCostPre83 = parseInt(traffic) * 1.7
    var extra = $("#extras").val();
    var extraCost = parseFloat(extra)

    var change = (parseFloat(dist) - 2 > 0) ? parseFloat(dist) - 2 : 0
    var initial = 24
    var numOfUpdates = ((change * 1000) / 200)
    var updates = parseInt(Math.round(numOfUpdates))
    var distCostPre83 = initial + (updates * 1.7)
    const totalCostPre83 = Math.round(((distCostPre83) + (tunnelCost) + (trunkCost) + (trafficCostPre83) + (extraCost)) * 100) / 100

    var totalCost = totalCostPre83

    var trafficCostPost83 = parseInt(traffic) * 1.2
    var changePost83 = totalCostPre83 > 83.5 ? ((((totalCostPre83 - tunnelCost - trunkCost - trafficCostPre83 - extraCost) - initial) / 1.7) * 200 / 1000) - 7 : change
    var changePost83 = Math.round(changePost83 * 100) / 100
    var numOfUpdatesPost83 = ((changePost83 * 1000) / 200)
    var updatesPost83 = parseInt(Math.round(numOfUpdatesPost83))
    var distCostPost83 = totalCostPre83 > 83.5 ? 83.5 + (updatesPost83 * 1.2) : distCostPre83
    var totalCostPost83 = totalCostPre83 > 83.5 ? Math.round(((distCostPost83) + (tunnelCost) + (trunkCost) + (trafficCostPost83) + (extraCost)) * 100) / 100 : totalCostPre83
    var totalCost = totalCostPost83

    $("#cost").html("<b>Cost:</b><br />" + "≈" + totalCost + "<br /><br /><br /><br />")
})