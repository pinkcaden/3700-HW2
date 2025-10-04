function genMovieForm() {
    const container = document.createElement("div");
    container.classList.add("container", "m-3")

    container.innerHTML = `
    <h3>Add New Movie</h3>
    <form onsubmit = "event.preventDefault(); postMovieObject()" >
    
    <div class = "row">
        <div class = "col-8">
            <div class = "form-group">
                <label for = "titleAdd">Movie Title</label>
                <input id = "titleAdd" class = "form-control" type = "text">
                <small id = "titleErr" class = "form-text text-danger"></small>
            </div>
        </div>
        <div class = "col-4">
            <div class = "form-group">
                <label for = "yearAdd">Release Year</label>
                <input id = "yearAdd" class = "form-control" type = "text">      
                <small id = "yearErr" class = "form-text text-danger"></small>
            </div>  
        </div>
    </div>
    <div class = "row">
        <div class = "col-auto"> 
            <div class = "form-group">
                <label for = "descriptionAdd">Description</label>
                <input id = "descriptionAdd" class = "form-control" type = "text">
                <small id = "descriptionErr" class = "form-text text-danger"></small>
            </div>
        </div>
    </div>
    <div class = "row">
        <div class = "col-6"> 
            <div class = "form-group">
                <label for = "directorAdd">Director</label>
                <input id = "directorAdd" class = "form-control" type = "text">
                <small id = "directorErr" class = "form-text text-danger"></small>
            </div>
        </div>    
        <div class = "col-3"> 
            <div class = "form-group">
                <label for = "budgetAdd">Budget (Millions) </label>
                <input id = "budgetAdd" class = "form-control" type = "text">
                <small id = "budgetErr" class = "form-text text-danger"></small>
            </div>
        </div>
        <div class = "col-3"> 
            <div class = "form-group">
                <label for = "boxAdd">Box Office Sales (Millions) </label>
                <input id = "boxAdd" class = "form-control" type = "text">       
                <small id = "boxErr" class = "form-text text-danger"></small> 
            </div>
        </div>
    </div> 
    <div class = "row">
        <div class = "col-6">
                <label for = "actorAdd">Lead Actor</label>
                <input id = "actorAdd" class = "form-control" type = "text">               
                <small id = "actorErr" class = "form-text text-danger"></small> 
        </div>
        <div class = "col-6">
                <label for = "roleAdd">Character/Role</label>
                <input id = "roleAdd" class = "form-control" type = "text">                  
                <small id = "roleErr" class = "form-text text-danger"></small>  
        </div>        
    </div>
    <div class = "row">
        <div class = "col-6">
            
        </div>
    <div class = "col-6">
    <button class = "btn btn-primary" type = "submit">Add Movie</button>
</div>
</div>
</form>
    
    
    `
    return container;

}