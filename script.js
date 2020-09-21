const newLi = document.createElement("li");
const newA = document.createElement("a");
const newLi2 = document.createElement("li");
const newA2 = document.createElement("a");
const valueA = document.createElement("a").value;

const getElements = document
  .getElementById("main-nav")
  .getElementsByTagName("ul")[0];

getElements.appendChild(newLi);
newLi.appendChild(newA);
newA.innerHTML = "Blog";

getElements.appendChild(newLi2);
newLi2.appendChild(newA2);
newA2.innerHTML = "Mind-Fullness";

const parent = document
  .getElementById("main-nav")
  .getElementsByTagName("ul")[0];

const lastChild = parent.getElementsByTagName("li")[5];
const child = parent.getElementsByTagName("li")[4];

const firstRemoved = parent.removeChild(lastChild);
const alsoRemoved = parent.removeChild(child);

console.log(valueA);

parent.appendChild(firstRemoved, alsoRemoved);
