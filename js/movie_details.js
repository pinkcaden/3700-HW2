
function genMovieBanner(movieObject) {
    const banner = document.createElement("div");
    banner.classList.add("container-fluid", "px-4", "mt-1", "mb-5", "bg-light");
    banner.innerHTML = `
    <h1 class = "display-3">${movieObject["title"]}</h1>
    <p >Released: ${movieObject["year"]}</p>
    <p >${movieObject["description"]}</p>`
    return banner;
}

function genMovieInformation(movieObject) {
    const container = document.createElement("div");
    container.classList.add("card")
    container.innerHTML = `<div class="card-body border-1">
        <div class = "card-title fw-bold"> Movie Information </div>
        <ul class = "list-group">
            <li class = "list-group-item m-1 border border-2 rounded-1"><b>Director: </b>${movieObject["director"]}</li>
            <li class = "list-group-item m-1 border border-2 rounded-1"><b>Budget: </b>${movieObject["budget"]}</li>
            <li class = "list-group-item m-1 border border-2 rounded-1"><b>Box Office: </b>${movieObject["boxOffice"]}</li>
        </ul>
    </div>
    `
    return container;
}

function genCastAndCrew(movieObject) {
    const container = document.createElement("div");
    container.classList.add("card")
    const body = document.createElement("div");
    container.append(body);

    body.classList.add("card-body")
    body.innerHTML = `
        <div class = "card-title fw-bold"> Cast & Crew </div>
        <div class = "card-text"> Main Cast:</div>
    `
    body.appendChild(genNameRoleCards(movieObject));

    return container;

}


function genNameRoleCards(movieObject){
    const cards = document.createElement("div");
    cards.classList.add("row", "row-cols-auto", "border-0");
    movieObject["actors"].forEach( (actor) => {
        const card = genNameRoleCard(actor["name"], actor["role"])
        card.classList.add("col-auto")
        cards.appendChild(card);
    })
    return cards;
}


function genNameRoleCard(name, role){
    const card = document.createElement("div");
    card.classList.add("card", "m-1", "border", "border-2", "rounded-1");
    card.innerHTML = `
        <div class = "card-text fw-bold px-2">${name}</div>
        <div class = "card-text px-2">${role}</div>
    `
    return card;
}