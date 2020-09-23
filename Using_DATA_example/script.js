const petsData = [{
        name: "Purrsloud",
        species: "Cat",
        favFoods: ["wet food", "dry food", "<strong>any</strong> food"],
        birthYear: 2020,
        photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
    },
    {
        name: "Barksalot",
        species: "Dog",
        birthYear: 2010,
        photo: "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
    },
    {
        name: "Meowsalot",
        species: "Cat",
        favFoods: ["tuna", "catnip", "celery"],
        birthYear: 2015,
        photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
    }
];

function age(birthYear) {
    let calculatedAge = new Date().getFullYear() - birthYear;
    if (calculatedAge == 1) {
        return "1 year old"
    } else if (calculatedAge == 0) {
        return "baby"
    } else {
        `${calculatedAge} years old`
    }
    console.log(calculatedAge)
}

function foods(foods) {
    return `
    <h4> favorite Food</h4>
    <ul class="food-list">
        ${foods.map(function(item){
            return `<li>${item}</li>`
        }).join(" ")}
    </ul>
    `
}

function petTemplate(pet) {
    return `
        <div class="animal">
            <img class="pet-photo" src="${pet.photo}"
            <h2 class"pet-name"> ${pet.name} <span class="species">(${pet.species})</span></h2>
            <p><strong>Age:</strong>${age(pet.birthYear)}</p>
            ${ pet.favFoods ? foods(pet.favFoods):''}
        </div>
    `
}

document.getElementById("app").innerHTML = `<h1 class="app-title">Pets (${petsData.length} results)</h1>
${petsData.map(petTemplate).join("")}
<p class="footer">These ${petsData.length} pets were added recenttly. check back soon for updates</p>
`;