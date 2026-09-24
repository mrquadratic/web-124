// Jake Zamarripa 9/24/26


const books = [
    {
        title: "IT",
        author: "Stephen King",
        pages: "100"
    },
    {
        title: "The Shining",
        author: "Stephen King",
        pages: "200"
    },
    {
        title: "Pet Sematary",
        author: "Stephen King",
        pages: "300"
    },
    {
        title: "The Mist",
        author: "Stephen King",
        pages: "400"
    },
    {
        title: "Revival",
        author: "Stephen King",
        pages: "500"
    }
];

console.log(`\n Console Output`);

books.forEach((books) => {
    console.log(`${books.title} by ${books.author} (${books.pages} pages)`);
});

console.log(`\n DOM Tree Exploration`);
// Putting the console logs inside template literals stops the data from being printed, I tested each before adding to made sure it worked
console.log(`{document}`);
console.log(`{document.body}`);
console.log(`{document.firstChild}`);
console.log(`{document.children}`);

console.log(`\n DOM Tree Exploration`);

const ulElement = document.children[0].children[1].children[2];
const firstLi = ulElement.children[0];
const parentofLi = firstLi.parentElement;
const siblingofLi = firstLi.nextElementSibling;

console.log(`${ulElement}`);
console.log(`${firstLi}`);
console.log(`${parentofLi}`);
console.log(`${siblingofLi}`);

console.log(`\n Node Properties`)

console.log(document.querySelector("li").innerText);

console.log(`\n Styles & Classes`)

const listItems = ulElement.children;

books.forEach((books, index) => {
    if (books.pages > 300) {
        listItems[index].classList.add("featured")
        console.log(`Featured class was added to ${books.title}.`);
    }
});