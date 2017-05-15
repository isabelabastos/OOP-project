console.log('hello');

// Example of jQuery AJAX call to page method
// that uses JSON on both sides

var hostPage = "index.aspx/";

var userInput = {
    probability: "2",
    severity: "3",
    riskResult: "a test value",
    regulatory: "Yes",
    reputationalRisk: "riskMedium",
    status: "amber"
};


// ****************
// startup function
function init() {
    loadAnalysis();
    
}

// ********************************************
// load the product object by retrieving a JSON
// string from the server and convert (eval)
function loadAnalysis() {
    callAJAX("LoadAnalysis", "");


}

// ********************************************
// save the product object
function saveAnalysis(userInput) {
    var json = JSON.stringify(userInput);
    console.log(json);
    callAJAX("SaveAnalysis", json);
}

// *********************
// Main AJAX entry point
function callAJAX(requestMethod, clientRequest) {
    var pageMethod = hostPage + requestMethod;

    var test = JSON.stringify({ request: clientRequest });

    $.ajax({
        url: pageMethod,   // Current Page, Method - default.aspx/SaveProduct
        data: JSON.stringify({ request: clientRequest }), // parameter map as JSON 
        type: "POST", // data has to be POSTed  
        contentType: "application/json", // posting JSON content      
        dataType: "JSON",  // type of data is JSON (must be upper case!)  
        timeout: 600000,    // AJAX timeout  
        success: function (result) {
            ajaxCallback(result.d);
        },
        error: function (xhr, status) {
            alert(status + " - " + xhr.responseText);
            console.log(xhr);
        }
    });
}

// ***************************
// Main AJAX callback function
function ajaxCallback(serverResponse) {
    if (serverResponse !== "SaveAnalysis") {
        // convert JSON string to JavaScript object
        var newProduct = JSON.parse(serverResponse);
        document.getElementById('probabiltyInput').value = newProduct.probability;
        document.getElementById('severityInput').value = newProduct.severity;
        document.getElementById('riskResultInput').value = newProduct.riskResult;
        document.getElementById('regulatoryInput').value = newProduct.regulatory;
        document.getElementById('reptutationalRiskInput').value = newProduct.reputationalRisk;
        document.getElementById('statusInput').value = newProduct.status;
        colorSelect();
    }
    else {
        alert("analysis saved");
    }
}



function colorSelect() {

    var color = document.getElementById('statusInput').options[document.getElementById('statusInput').selectedIndex].value;

    if (color == 'red') {
        document.getElementById('statusInput').style.background = 'red';
    }
    else if (color == 'amber') {
        document.getElementById('statusInput').style.background = 'yellow';
    }
    else if(color =='green'){
        document.getElementById('statusInput').style.background ='green';
    }
   
}


function validate() {
    var probabilityValue = document.getElementById('probabiltyInput').value;
    var severityValue = document.getElementById('severityInput').value;
    var riskResultValue = document.getElementById('riskResultInput').value;
    var regulatoryValue = document.getElementById('regulatoryInput').value;
    var reptutationalRiskValue = document.getElementById('reptutationalRiskInput').value;
    var statusValue = document.getElementById('statusInput').value;
    console.log(probabilityValue + " - " + severityValue + " - " + riskResultValue + " - " + regulatoryValue + " - " + reptutationalRiskValue + " - " + statusValue);
    if (riskResultValue == '') {
        alert('Enter a value for Risk Result');
    }
    else {
        var submit = {
            probability: probabilityValue,
            severity: severityValue,
            riskResult: riskResultValue,
            regulatory: regulatoryValue,
            reputationalRisk: reptutationalRiskValue,
            status: statusValue
        };
        saveAnalysis(submit);
        
    }
    

}
