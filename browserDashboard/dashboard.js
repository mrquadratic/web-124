// Jake Zamarripa 10/18/26

console.log(window.location.href);
console.log(navigator.language);
console.log(navigator.onLine);
console.log(screen.width, screen.height);

console.log(window.innerWidth,window.innerHeight);

const form = document.querySelector("#mainform");

const formName = form.elements.name;
const formWebsite = form.elements.favwebsite;
console.log(formName);
console.log(formWebsite);

const output = document.querySelector("#output");
const nameData = formName.value;
const websiteData = formWebsite.value;
    
function formSubmit(event){
    event.preventDefault();
    output.textContent = `${nameData}'s favorite website is ${websiteData}`;
}

const submit = document.getElementById("submitButton");
submit.addEventListener("click", formSubmit);

formName.onfocus = function() {
    console.log("The name field is in focus");
};

formName.onblur = function() {
    console.log("The name field was left");
};

let url = new URL(formWebsite.value);
console.log(url.hostname);
console.log(url.protocol);
console.log(url.pathname);

localStorage.setItem('name', nameData);
const retrievedName = localStorage.getItem('name');
console.log(`The name ${retrievedName} was got from local storage`);

sessionStorage.setItem('website', websiteData);
const retrievedWebsite = sessionStorage.getItem('website');
console.log(`The name ${retrievedWebsite} was got from session storage`);