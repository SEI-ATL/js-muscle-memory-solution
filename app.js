const exercises = [
    {
        exercise: 'dumbbell curls',
        bodyType: 'biceps',
        bodyPart: 'arms'
    },
    {
        exercise: 'running',
        bodyPart: 'legs'
    },
    {
        exercise: 'sit ups',
        bodyType: 'abs',
        bodyPart: 'core'
    }
];

const container = document.querySelector('.container');

function addExercisesToContainer(array) {
    // iterate through the array
    for (let i = 0; i < array.length; i++) {
        // set each element to a variable
        let exerciseVariable = array[i].exercise;
        let newElement = document.createElement('p');
        newElement.textContent = exerciseVariable;
        container.appendChild(newElement);
    }
    
    // create a new element
    // access "exercise" key to get value
    // add value text to element (textContent)
    // append new element to container
}

addExercisesToContainer(exercises);

//=================================================

function addBodyTypeToContainer(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].bodyType) {
            let btype = array[i].bodyType;
            let newElement = document.createElement('p');
            newElement.textContent = btype;
            newElement.style.color = 'red';
            container.appendChild(newElement);
        } else {
            continue;
        }
    }
}

addBodyTypeToContainer(exercises);