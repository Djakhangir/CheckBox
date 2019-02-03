
//create variable to select inbox and every item in inbox tag of html file where tht type is checkbox
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

//create the variable 'lastChecked' in order to remember the last clicked item...
let lastChecked;

function handleCheck(e) {
    //check if user has a shift key down
    let inBetween  = false;
    //and check if item is checked
    if (e.shiftKey && this.checked) {
        //go ahead and do what you want
        //loop over every single checkbox
        checkboxes.forEach(checkbox => {
            //console.log(checkbox);
            if (checkbox === this || checkbox === lastChecked ){
                inBetween = !inBetween;
                //console.log('Starting to check them in between!')
            }
            if (inBetween) {
                checkbox.checked = true;
            }
        });
        
    }
 lastChecked=this; 
}

//adding the event to the variable 'checkBoxes' by looping each checkbox 
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))