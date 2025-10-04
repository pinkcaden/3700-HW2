const MOVIES_URL = "http://localhost:3000/movies"

function genThumbnailTableHeader() {
    const header = document.createElement("thead");
    header.innerHTML = `
    <tr>
        <th scope="col">Title</th>
        <th scope="col">Director</th>
        <th scope="col">Year</th>
        <th scope="col">Box Office</th>
        <th scope="col">Lead Actor</th>
        <th scope="col">Actions</th>
    </tr>
    `
    return header;

}

function genThumbnailRow(movieKey, movieObject) {
    const link = "./movie_details.html?id=" + movieKey

    const movieRow = document.createElement('tr');
    let movieCells = ``;


    movieCells += `
        <td><b>${movieObject["title"]}<b/></td>
        <td>${movieObject["director"]}</td>
        <td>${movieObject["year"]}</td>
        <td>${movieObject["boxOffice"]}</td>
        <td>${movieObject["actors"][0]["name"]}</td>
        <td></td>
        `
    movieRow.innerHTML = movieCells;


    // .addEventListener("click", function () {
    //     sessionStorage.setItem(movieKey, JSON.stringify(movieObject));
    // });
    return movieRow;

}


function genThumbnailsTable(moviesSet) {
    let thumbnailList = document.createElement("table");
    thumbnailList.classList.add("table", "table-striped");
    thumbnailList.appendChild(genThumbnailTableHeader());
    Object.keys(moviesSet).forEach((movieKey) => {
        thumbnailList.appendChild(genThumbnailRow(movieKey, moviesSet[movieKey]));
    })
    return thumbnailList
}


