function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest= principal*years*rate/100;
    var year = new Date().getFullYear()+parseInt(years);

    if (isNaN(principal) || principal <= 0) {
        alert("Please enter a positive number");
        document.getElementById("principal").focus();
        return;
    }
    else {
        document.getElementById("result").innerHTML="If you deposit <mark>" 
            + principal + "</mark>\<br\>At an interest rate of <mark>"
            + rate + "</mark>\<br\>You will receive an amount of <strong><mark>"
            + interest.toFixed(2) + "</mark></strong>\<br\>In the year <mark>" + year + "</mark> !";
    }

}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}        

function CheckField()
{
    if(document.getElementById("principal").value>0){

    }
    else
    {
        alert('Enter a positive number');
        document.getElementById("principal").value="";
        document.getElementById("principal").focus();
    }
}