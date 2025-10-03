let navItemsContent = {
    "home": [
        {
            fw: "fw-bold",
            href: "moviesHW.html",
            text: "Home"
        }, {
            fw: "fw-normal",
            href: "https://www.imdb.com/chart/top/",
            text: "Top Rated"
        }, {
            fw: "fw-normal",
            href: "https://www.fandango.com/movies-in-theaters",
            text: "Latest"
        }],
    "details": [
        {
            fw: "fw-normal",
            href: "moviesHW.html",
            text: "Home"
        }, {
            fw: "fw-bold",
            href: "https://www.reddit.com/r/movies/comments/kiivkc/how_would_one_begin_to_learn_about_movies/",
            text: "Movie Details"
        }, {
            fw: "fw-normal",
            href: "https://www.fandango.com/movies-in-theaters",
            text: "Latest"
        }
    ]
}

function getNavItemsContent() {
    // Will be replaced by JSON file query
    return navItemsContent
}

function genNavbar(pageType) {
    const navBar = document.createElement("div");
    navBar.classList.add("navbar", "navbar-expand", "bg-light");
    navBar.innerHTML = `
        <div class = "container-fluid" >
            ${genBrand()}
            ${genNavLinks(pageType)}
        </div>`

    return navBar
}

function genBrand() {
    return ` <a class = "navbar-brand text-black justify-content-center" href = "#"> 
            <img src = "../imgs/rose.png" width = "100" height = "100" alt = "rose logo " class="d-inline-block align-top mx-2"> 
            <img src = "../imgs/pink-cinema-title.png" height = "80" alt = "rose logo " class="d-inline-block align-top">
        </a>`
}

function genNavLinks(pageType) {

    let itemStr = ``;
    const items = getNavItemsContent()[pageType];

    for (const item of items) {
        itemStr = itemStr + `<li class = "${item.fw} nav-item text-dark border border-dark m-1 p-1 rounded-1 bg-light" >
        <a href = ${item.href} class = "nav-link active text-black " >${item.text}</a>
        </li>`
    }

    return `
    <div class="collapse navbar-collapse justify-content-end">
        <ul class="navbar-nav"> 
            ${itemStr} 
        </ul>
    </div>`
}

function genFooter() {

    const footer = document.createElement("footer");

    footer.classList.add("footer", "bg-dark", "justify-content-center")
    footer.innerHTML = `
    <div class = "container-fluid  text-white-50 text-center py-3">@ 2025 Pink Cinema. All rights reserved.
    </br>Thank you to all of our kind benefactors.</div>
    `
    return footer;


}