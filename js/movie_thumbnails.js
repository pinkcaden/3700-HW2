const MOVIES_URL = "http://localhost:3000/movies"


function genThumbnail(movieKey, movieObject) {
    const link = "./movie_details.html?id=" + movieKey

    const movieThumbnail = document.createElement('div');
    movieThumbnail.classList.add("container", "rounded-3", "container-sm");
    movieThumbnail.innerHTML =

        `<div class = "card rounded-3">
            <div class="card-body border-1">
            <div class = "card-title">${movieObject["title"]} (${movieObject["year"]})</div>
            <div class = "card-text my-1">
                ${movieObject["description"]}
                </br><b>Box Office: </b> ${movieObject["boxOffice"]}
            </div >
            <a href = ${link} class = "btn btn-primary m-1" >View Details</a>
        </div>
    </div>`
    movieThumbnail.addEventListener("click", function () {
        sessionStorage.setItem(movieKey, JSON.stringify(movieObject));
    });
    return movieThumbnail;

}


function genThumbnailSet(moviesSet) {
    let thumbnailList = document.createElement("div");
    Object.keys(moviesSet).forEach((movieKey) => {
        thumbnailList.appendChild(genThumbnail(movieKey, moviesSet[movieKey]));
    })
    return thumbnailList
}


