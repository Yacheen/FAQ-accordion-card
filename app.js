// create buttons/listeners that detect when arrow is clicked with a transition,
// then display: block, when clicked again, display: none;

//event listener text to use in order: 
//You can invite up to 2 additional users on the Free plan. There is no limit on 
//team members for the Premium plan.

// No more than 2GB. All files in your account must fit your allotted storage space.

//Click “Forgot password” from the login page or “Change password” from your profile page.
//A reset link will be emailed to you.

// Yes! Send us a message and we’ll process your request no questions asked.

// Chat and email support is available 24/7. Phone lines are open during normal business hours.

// create the li classlists, select the ul first maybe
const faqQuestions = document.getElementById('FAQ-questions');

const liItems = document.querySelectorAll(".question");
for (const [x, li] of Object.entries(liItems)) {
    console.log(x, li)
    //add classes to the li's
    li.classList.add('item');
    li.classList.add(`item${x}`);
}
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
