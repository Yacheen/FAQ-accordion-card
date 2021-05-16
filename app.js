

const liItems = document.querySelectorAll(".question");

for (const [x, li] of Object.entries(liItems)) {
    //add classes to the li's
    li.classList.add('item');
    li.classList.add(`item${x}`);
}

//select all of the buttons (li children)
const buttonImages = document.children('#FAQ-questions');
//depending on which child you clicked, toggle text that displays block in the li
buttonImages.addEventListener('click', (buttonNumberClicked) => {
    switch (buttonNumberClicked) {
        case buttonNumberClicked.childElement.classList.contains('item0'):
            
            //then, dropdown the text in the li
            //what do i put next? how do i say what to do exactly?
    }
});







// liItems.forEach((element, index) => {
//     console.log(element, index)


//     //create a div with a class li-item-styles
//     const itemDiv = document.createElement('div');
//     itemDiv.classList.add('li-item-styles');

//     //add classes to the li's
//     element.classList.add('item');
//     element.classList.add(`item${index+1}`);

//     //create the dropdown menu buttons, and append them to the divs
//     const itemDropdownArrow = document.createElement('img');
//     itemDropdownArrow.classList.add('img-arrow-background');
//     itemDiv.appendChild(itemDropdownArrow);

//     console.log(itemDiv.children);

// });
