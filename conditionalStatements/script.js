console.log("Discount eligibilty check") ;
function eligibilityCheck() {
    let age = document.getElementById("userAge").value;
    let member = document.getElementById("checkBox").checked;
    if (age>64) {
        document.getElementById("result").textContent = "Yes, you are eligible for a senior discount!";
        document.getElementById("result").style.color = "green";
    }
    else if (age>17&&member) {
        document.getElementById("result").textContent = "Yes, you are eligible for a membership discount!";
        document.getElementById("result").style.color = "green";
    }
    else {
        document.getElementById("result").textContent = "Sorry, you are not eligible for a discount!";
        document.getElementById("result").style.color = "red";
    }

    return result;
}