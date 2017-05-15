function colorSelect() {

    var color = document.getElementById('statusInput').options[document.getElementById('statusInput').selectedIndex].value;

    if (color == 'red') {
        document.getElementById('statusInput').style.background = "red";
    }
    else if (color == 'amber') {
        document.getElementById('statusInput').style.background = 'yellow';
    }
    else if (color == 'green') {
        document.getElementById('statusInput').style.background = 'green';
    }

}


function validate() {
    var probabilityValue = document.getElementById('probabiltyInput').value;
    var severityValue = document.getElementById('severityInput').value;
    var riskResultValue = document.getElementById('riskResultInput').value;
    var regulatoryValue = document.getElementById('regulatoryInput').value;
    var reptutationalRiskValue = document.getElementById('reptutationalRiskInput').value;
    var statusValue = document.getElementById('statusInput').value;

    if (riskResultValue == '') {
        alert('Enter a value for Risk Result');
    }
    else {
        var userInput = {
            probability: probabilityValue,
            severity: severityValue,
            riskResult: riskResultValue,
            regulatory: regulatoryValue,
            reputationalRisk: reptutationalRiskValue,
            status: statusValue
        };

        var JASON = JSON.stringify(userInput);

        console.log(JASON);



    }


}
