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
    "budget": {
        "minBudgetMilInc": 1,
        "maxBudgetMilInc": 1000
    },

    "leadActor": {
        "minCharExc": 3,
        "minWordInc": 2
    },

    "role": {
        "minCharInc": 3
    }
}


function validateMovieTitle(title) {
    const minLength = VALIDATION_VALUES["title"]["minCharInc"]
    if (title.length < minLength) {
        return {"isValid": false, "message": `Title must be at least ${minLength} characters.`}
    }
    return {"isValid": true, "message": "Valid Title."}
}

function validateReleaseYear(year) {
    const minYear = VALIDATION_VALUES["year"]["minNumInc"]
    const maxYear = VALIDATION_VALUES["year"]["maxNumInc"]
    if (year < minYear)
        return {"isValid": false, "message": `Year must be after ${minYear}.`}
    if (year > maxYear) {
        return {"isValid": false, "message": `Year must be before ${maxYear}.`}
    }
    return {"isValid": true, "message": "Valid Year."}
}

function validateDescription(description) {
    const minLength = VALIDATION_VALUES["description"]["minCharInc"]
    const maxLength = VALIDATION_VALUES["description"]["maxCharInc"]
    if (description.length < minLength) {
        return {}
    } 
    if (description.length > maxLength) {
        
    }
}

function validateMovieData() {

}