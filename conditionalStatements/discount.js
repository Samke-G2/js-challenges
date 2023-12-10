console.log("Discount Eligibility") ;

function discountCheck() {
    let age = document.getElementById("userAge").value;
    let member = document.getElementById("member");

    if (Number(age) >= 65) {
        document.getElementById("result").innerHTML = 'YES! You qualify for the senior discount!';
        document.getElementById("result").style.color = "green";
    } else if (Number(age) >= 18 && member.checked) {
        document.getElementById("result").innerHTML = 'YES! You qualify for the member discount!';
        document.getElementById("result").style.color = "green";
    } else {
        document.getElementById("result").innerHTML = 'Sorry, you do not qualify for a discount!';
        document.getElementById("result").style.color = "red";
    }
}

const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
});