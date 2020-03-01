let date = moment().format("dddd, MM/DD/YYYY");
let dateArray = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm"];
let currentTime = moment().format("H");
let textArray = [];
currentTime = 12;
let Appointments = {};

dd("#headerDiv")    //Header
    .writer("Day Planner", "h3")
    .writer(`Today is ${date}`, "p", ".font-weight-bolder");

    dateArray.forEach((value, index) => {   //Build the planner
    let currentColor;
        if (currentTime - 8 == index) {
        currentColor = ".bg-yellow";
    } else if (currentTime - 8 > index) {
        currentColor = ".bg-red";
    } else {
        currentColor = ".bg-green";
    }
        dd("#planner")
            .diver(`#div${index} .overflow-hidden .rounded-lg .col-auto .hourBlock .bg-dark`)
            .diver(`#label${index} .text-center .hourLabel ${currentColor}`)
            .writer(value, "p", ".font-weight-bolder");
            let Elem = document.createElement("input");
            Elem.setAttribute("id", `text${index}`);
            Elem.setAttribute("type", "text");
            Elem.classList.add("TextArea");
            textArray.push(Elem)
            document.querySelector(`#div${index}`).appendChild(Elem);
            dd(`#div${index}`).diver(".submit .bg-info");

});


document.querySelector("form").addEventListener("submit", () => {console.log("submitted")})

if (window.localStorage.getItem(date) !== null){
    Appointments = JSON.parse(window.localStorage.getItem(date));
    textArray.forEach((item, index) => {
        item.value = Appointments[index];
    })
}

function saveToStorage() {
    textArray.forEach((item, index) => {
        Appointments[index] = item.value;
        window.localStorage.setItem(date, JSON.stringify(Appointments));
    })
}

document.querySelector("#planner").addEventListener("click", (e) => {
if (e.target.classList.contains("submit")) {
    saveToStorage();
}
});

