document.getElementById("greeting").textContent ="Hello!";
document.getElementById("h1").textContent = "Welcome";

let items = document.getElementsByClassName(".whiteclass");
for (let i = 0; i < items.length; i++);
{
    items[i].textContent = "Text change";
}
const red = document.querySelectorAll(".whiteclass");


const header = document.querySelector("h1");
const textbox = document.getElementById ("Text box");
let name = "";
document.getElementById("click").addEventListener("click", () =>
{
    event.preventDefault();
    name =textbox.value;
    header.textContent = "Hello, " + name + "!";
});

const btn = document.getElementById('submit');
const input = document.getElementById('name');
btn.addEventListener('click', (event) =>
{
    const name = input.value;
    const para = document.getElementById('greeting');
    para.textContent = "Welcome, ${name}!";
    input.value = '';
});