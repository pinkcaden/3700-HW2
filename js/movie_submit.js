const VALIDATION_VALUES = {
    "title": {
        "minCharInc": 3
    },
    "year": {
        "minNumInc": 1880,
        "maxNumInc": new Date().getFullYear()
    },
    "description": {
        "minCharInc": 10,
        "maxCharInc": 500
    },
    "director": {
        "minCharInc": 3,
    },
    "budget": {
        "minBudgetInc": 1,
        "maxBudgetInc": 1000
    },
    "leadActor": {
        "minCharExc": 3,
        "minWordInc": 2
    },
    "role": {
        "minCharInc": 3
    }
}

function validateTitle(title) {
    const minLength = VALIDATION_VALUES["title"]["minCharInc"];
    if (title.length < minLength) {
        return {"isValid": false, "message": `Title must be at least ${minLength} characters.`};
    }
    return {"isValid": true, "message": "Valid Title."};
}

function validateReleaseYear(year) {
    const minYear = VALIDATION_VALUES["year"]["minNumInc"];
    const maxYear = VALIDATION_VALUES["year"]["maxNumInc"];
    if (year < minYear)
        return {"isValid": false, "message": `Year must be after ${minYear}.`};
    if (year > maxYear) {
        return {"isValid": false, "message": `Year must be before ${maxYear}.`};
    }
    return {"isValid": true, "message": "Valid Year."};
}

function validateDescription(description) {
    const minLength = VALIDATION_VALUES["description"]["minCharInc"];
    const maxLength = VALIDATION_VALUES["description"]["maxCharInc"];
    if (description.length < minLength) {
        return {"isValid": false, "message": `Description must be at least ${minLength} characters.`};
    }
    if (description.length > maxLength) {
        return {"isValid": false, "message": `Description must be at most ${maxLength} characters.`};
    }
    return {"isValid": true, "message": "Valid Description."};
}


function validateDirector(director) {
    const minLength = VALIDATION_VALUES["director"]["minCharInc"];

    if (director.length < minLength) {
        return {"isValid": false, "message": `Name must be at least ${minLength} characters.`};
    }
    return {"isValid": true, "message": "Valid Director."};
}


function validateBudget(budget) {
    const minBudget = VALIDATION_VALUES["budget"]["minBudgetInc"];
    const maxBudget = VALIDATION_VALUES["budget"]["maxBudgetInc"];
    if (budget < minBudget) {
        return {"isValid": false, "message": `Budget must be at least ${minBudget} million.`};
    }
    if (budget > maxBudget) {
        return {"isValid": false, "message": `Budget must be at least ${maxBudget} million.`};
    }
    return {"isValid": true, "message": "Valid budget."};
}

function validateActor(leadActor) {
    const minLength = VALIDATION_VALUES["leadActor"]["minCharExc"];
    const minWords = VALIDATION_VALUES["leadActor"]["minWordInc"];
    if (leadActor.length < minLength) {
        return {"isValid": false, "message": `Name must have more than ${minLength} characters.`};
    }
    if (leadActor.trim().split(' ').length < minWords) {
        return {"isValid": false, "message": `Name must have at least ${minWords} words.`};
    }
    return {"isValid": true, "message": "Valid Lead Actor."};
}

function validateRole(role) {
    const minLength = VALIDATION_VALUES["role"]["minCharInc"];
    if (role.length < minLength) {
        return {"isValid": false, "message": `Role must be at least ${minLength} characters.`};
    }
    return {"isValid": true, "message": "Valid Role."};

}

function buildMovieObject() {
    const titleVal = document.getElementById("1").value;
    const yearVal = document.getElementById("2").value;
    const descriptionVal = document.getElementById("3").value;
    const directorVal = document.getElementById("4").value;
    const budgetVal = document.getElementById("5").value;
    const actorVal = document.getElementById("6").value;
    const roleVal = document.getElementById("7").value;
    const boxVal = document.getElementById("8").value;

    const newMovie = {
        "id": 1,
        "title": titleVal,
        "description": descriptionVal,
        "year": yearVal,
        "boxOffice": boxVal + "M",
        "director": directorVal,
        "budget": budgetVal + "M",
        "actors": [
            {"name": actorVal, "role": roleVal}
        ]
    }
}

function validateMovieObject(movieObject) {

    const titleErr = document.getElementById("");
    const yearErr = document.getElementById("");
    const descriptionErr = document.getElementById("");
    const directorErr = document.getElementById("");
    const budgetErr = document.getElementById("");
    const actorErr = document.getElementById("");
    const roleErr = document.getElementById("");

    let validData = true;

    let validateRes = validateTitle(movieObject["title"]);
    if (!(validateRes["isValid"])) {
        validData = false;
        titleErr.innerText = "Invalid Title";
    }
    validateRes = validateReleaseYear(movieObject["year"]);
    if (!(validateRes["isValid"])) {
        validData = false;
        yearErr.innerText = validateRes["message"];
    }
    validateRes = validateDescription(movieObject["description"]);
    if (!(validateRes["isValid"])) {
        validData = false;
        descriptionErr.innerText = validateRes["message"];
    }
    validateRes = validateDirector(movieObject["director"]);
    if (!(validateRes["isValid"])) {
        validData = false;
        directorErr.innerText = validateRes["message"];
    }
    validateRes = validateBudget(movieObject["budget"]);
    if (!(validateRes["isValid"])) {
        validData = false;
        budgetErr.innerText = validateRes["message"];
    }
    validateRes = validateActor(movieObject["actors"]);
    if (!(validateRes["isValid"])) {
        validData = false;
        actorErr.innerText = validateRes["message"];
    }
    validateRes = validateRole(movieObject["role"]);
    if (!(validateRes["isValid"])) {
        validData = false;
        roleErr.innerText = validateRes["message"];
    }
    return validData;
}

function postMovieObject(){



}