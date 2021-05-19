
//add classes to each li for stylin'
const liItems = document.querySelectorAll(".question");

for (const [x, li] of Object.entries(liItems)) {
    //add classes to the li's
    li.classList.add('item');
    li.classList.add(`item${x}`);
}

//select all of the buttons (li children)
const buttonImages = document.getElementsByClassName('question');

//honestly, what I made looks like a complete abomination but that's okay.
//I would say it is pretty good practice for learning javascript as a noobie


//depending on which child you clicked, toggle text that will display: block in that li

Array.from(buttonImages).forEach(button => {
    button.addEventListener('click', () => {
        
        const allthepees = document.getElementsByTagName('p');
        
        //check to see if an li is already selected
        if(button.querySelector('p').classList.contains('list-item-active')) {
            
            button.querySelector('p').classList.toggle('list-item-active');
            button.querySelector('span').classList.toggle('list-item-text-active');
            button.querySelector('img').classList.toggle('arrow-button-rotator');

        }
        //iterate through each paragraph in li and remove styles
        else {
            Array.from(allthepees).forEach(p => {
                if(p.classList.contains('list-item-active')) {
                    
                    p.classList.remove('list-item-active');
                    p.previousElementSibling.classList.remove('arrow-button-rotator');
                    p.previousElementSibling.previousElementSibling.classList.remove('list-item-text-active');
                } 
            })
            //toggle styles whilst displaying dropdown text
            button.querySelector('span').classList.toggle('list-item-text-active');
            button.querySelector('p').classList.toggle('list-item-active');
            button.querySelector('img').classList.toggle('arrow-button-rotator');
        }
    });
});


    

    






/* previous dumb code */

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
