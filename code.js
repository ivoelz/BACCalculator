$(document).ready(function () {

    $("#bacButton").click(calculateBac);

    function calculateBac()
    {
        var beers = $("#beer").val();
        beers = parseFloat(beers);

        var wine = $("#wine").val();
        wine = parseFloat(wine);

        var shots = $("#shots").val();
        shots = parseFloat(shots);

        var weight = $("#weight").val();
        weight = parseFloat(weight);

        var hours = $("#time").val();
        hours = parseFloat(hours);

        //Determine the total liquid ounces of alcohol consumed
        var totalBeers = beers * 0.54;
        totalBeers = parseFloat(totalBeers);

        var totalWine = wine * 0.6;
        totalWine = parseFloat(totalWine);

        var totalShots = shots * 0.6;
        totalShots = parseFloat(totalShots);

        //Multiply the result of step 1 by 7.5, which is the average alcohol absorption rate
        var totalAlc = (totalBeers + totalWine + totalShots);
        totalAlc = parseFloat(totalAlc);

        var alcAbsorption = totalAlc * 7.5;
        alcAbsorption = parseFloat(alcAbsorption);

        //Divide the result of step 2 by the person's weight to determine their BAC
        var bacWeight = alcAbsorption / weight;
        bacWeight = parseFloat(bacWeight);

        //subtract 0.015 for each hour since their first drink
        var hoursMath = bacWeight - (hours * 0.015);

        hoursMath = parseFloat(hoursMath);

        //Round the result of step 4 to three decimal places
        $("#bacTotal").text(hoursMath.toFixed(3));
        $(".output").show();
    }
});