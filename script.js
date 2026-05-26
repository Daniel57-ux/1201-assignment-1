// =========================
// Current Date
// =========================

let dateElements = document.querySelectorAll(".currentDate");

dateElements.forEach(function(item) {
    item.innerHTML = new Date().toLocaleDateString();
});


// =========================
// Show Image After 10 Seconds
// =========================

let image = document.getElementById("profileImage");

if (image) {

    setTimeout(function () {

        image.style.display = "block";

    }, 10000);
}


// =========================
// Mark To Grade Converter
// =========================

function markToGrade() {

    let inputBox =
        document.getElementById("mark-input-box");

    let validation =
        document.getElementById("validation-message");

    let result =
        document.getElementById("grade-result");

    if (!inputBox || !validation || !result) {
        return;
    }

    let markInput = inputBox.value;

    validation.innerHTML = "";
    result.innerHTML = "";

    try {

        if (markInput.trim() === "") {
            throw "Please enter a value.";
        }

        let mark = parseInt(markInput);

        if (isNaN(mark)) {
            throw "Only numbers are allowed.";
        }

        if (mark < 0) {
            throw "Mark cannot be negative.";
        }

        if (mark > 100) {
            throw "Mark cannot be greater than 100.";
        }

        let grade = "";

        if (mark >= 90) {
            grade = "A";
        }
        else if (mark >= 80) {
            grade = "B";
        }
        else if (mark >= 70) {
            grade = "C";
        }
        else if (mark >= 60) {
            grade = "D";
        }
        else if (mark >= 50) {
            grade = "E";
        }
        else {
            grade = "F";
        }

        result.innerHTML = "Grade: " + grade;

    }
    catch(error) {

        validation.innerHTML = error;
    }
}


// =========================
// Staff Data
// =========================

var dataSet = [

    [ "Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000" ],
    [ "Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500" ],
    [ "Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900" ],
    [ "Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500" ],
    [ "Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600" ]

];

let nameAscending = true;
let salaryAscending = true;


// =========================
// Display Staff
// =========================

function displayStaff() {

    let container =
        document.getElementById("staffContainer");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    dataSet.forEach(function(staff) {

        container.innerHTML += `

            <div class="staff-card">

                <h3>${staff[0]}</h3>

                <p><strong>Position:</strong> ${staff[1]}</p>

                <p><strong>Office:</strong> ${staff[2]}</p>

                <p><strong>Extension:</strong> ${staff[3]}</p>

                <p><strong>Start Date:</strong> ${staff[4]}</p>

                <p><strong>Salary:</strong> ${staff[5]}</p>

            </div>

        `;
    });
}

displayStaff();


// =========================
// Sort By Name
// =========================

function sortByName() {

    if (nameAscending) {

        dataSet.sort(function(a, b) {

            return a[0].localeCompare(b[0]);

        });

    }
    else {

        dataSet.sort(function(a, b) {

            return b[0].localeCompare(a[0]);

        });
    }

    nameAscending = !nameAscending;

    displayStaff();
}


// =========================
// Sort By Salary
// =========================

function sortBySalary() {

    if (salaryAscending) {

        dataSet.sort(function(a, b) {

            let salaryA =
                parseInt(a[5].replace(/[$,]/g, ""));

            let salaryB =
                parseInt(b[5].replace(/[$,]/g, ""));

            return salaryA - salaryB;
        });

    }
    else {

        dataSet.sort(function(a, b) {

            let salaryA =
                parseInt(a[5].replace(/[$,]/g, ""));

            let salaryB =
                parseInt(b[5].replace(/[$,]/g, ""));

            return salaryB - salaryA;
        });
    }

    salaryAscending = !salaryAscending;

    displayStaff();
}


// =========================
// Temperature Converter
// =========================

function convertTemperature() {

    let type =
        document.getElementById("tempType");

    let input =
        document.getElementById("tempInput");

    let result =
        document.getElementById("tempResult");

    if (!type || !input || !result) {
        return;
    }

    let value = parseFloat(input.value);

    if (isNaN(value)) {

        result.innerHTML =
            "Please enter a valid number.";

        return;
    }

    let celsius;
    let fahrenheit;
    let kelvin;

    if (type.value === "celsius") {

        fahrenheit = (value * 9/5) + 32;
        kelvin = value + 273.15;

        result.innerHTML =
            "Fahrenheit: " +
            fahrenheit.toFixed(2) +
            " °F<br>" +

            "Kelvin: " +
            kelvin.toFixed(2) +
            " K";
    }

    else if (type.value === "fahrenheit") {

        celsius = (value - 32) * 5/9;
        kelvin = celsius + 273.15;

        result.innerHTML =
            "Celsius: " +
            celsius.toFixed(2) +
            " °C<br>" +

            "Kelvin: " +
            kelvin.toFixed(2) +
            " K";
    }

    else {

        celsius = value - 273.15;
        fahrenheit = (celsius * 9/5) + 32;

        result.innerHTML =
            "Celsius: " +
            celsius.toFixed(2) +
            " °C<br>" +

            "Fahrenheit: " +
            fahrenheit.toFixed(2) +
            " °F";
    }
}