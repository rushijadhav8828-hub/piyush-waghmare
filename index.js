document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let mobile = document.getElementById("mobile").value;
    let admission = document.getElementById("admission").value;

    let services = [];
    document.querySelectorAll('input[type="checkbox"]:checked')
        .forEach(item => services.push(item.value));

    let output = `
        <h3>Patient Registered Successfully</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Age:</b> ${age}</p>
        <p><b>Gender:</b> ${gender}</p>
        <p><b>Mobile:</b> ${mobile}</p>
        <p><b>Admission Type:</b> ${admission}</p>
        <p><b>Selected Checkups:</b> ${services.join(", ")}</p>
    `;

    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = output;
    outputDiv.style.display = "block";
});