// Jake Zamarripa 10/23/26

// Part 2 Object/Array
    // to do later: create array that holds all previous notes, can only save last note atm
    // find out where to throw an object in somewhere

// Part 3 DOM modifying the nav bar
let toggle;
function navBar(){
    const navList = document.styleSheets[0].cssRules[2].style;
    navList.setProperty("display", "inline-block");
    // Part 3 (1/2)
    document.querySelector(".hamburgerbutton").style.backgroundColor = "#979aaa77"

    if (toggle == 1) {
        navList.setProperty("display", "none");
        document.querySelector(".hamburgerbutton").style.backgroundColor = ""
        toggle = 0;
    } else {
        toggle = 1;
    }
}
// Part 3 (2/2)
const navBtn = document.getElementById("navButton");
// Part 4 Events
// Part 4 (1/2)
navBtn.addEventListener("click", navBar);
// Part 4 (2/2)
navBtn.oncontextmenu = function() {
    console.log("The nav button was right clicked, left click instead!");
};

// Part 5
    // to do later: have the submit button change the color of something with event bubbling

// Part 6
const form = document.querySelector("#mainform");
const formTitle = form.elements.title;
const formInfo = form.elements.info;
const output = document.querySelector("#output");
    
function formSubmit(event){
    event.preventDefault();
    var titleData = formTitle.value;
    var infoData = formInfo.value;
    localStorage.setItem('title', titleData);
    localStorage.setItem('info', infoData);
    output.textContent = `${titleData}: ${infoData}`;
    formTitle.value = "";
    formInfo.value = "";
}

const submit = document.getElementById("submitButton");
submit.addEventListener("click", formSubmit);

// Part 7
const funOutput = document.querySelector("#funoutput");
const funOutput2 = document.querySelector("#funoutput2");
function displayFacts(){
    funOutput.textContent = `The language of this browser is ${navigator.language}`
    funOutput2.textContent = `Is this browser online?: ${navigator.onLine}`
}
const funFact = document.getElementById("funfacttitle");
funFact.addEventListener("click", displayFacts);

// Part 8
const prevOutput = document.querySelector("#prevoutput");
function getNote(){
    const retrievedTitle = localStorage.getItem('title');
    const retrievedInfo = localStorage.getItem('info');
    prevOutput.textContent = `${retrievedTitle}: ${retrievedInfo}`;
}

const prevNotes = document.getElementById("prevnotes");
prevNotes.addEventListener("click", getNote);

// Part 9
