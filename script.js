const button = document.querySelector(".sub-btn"); 
const ratingButton = document.querySelectorAll(".rating-btn"); 

const rateSection = document.querySelector(".rate");
const responseSection = document.querySelector(".response"); 

const ratingTitle = document.querySelector(".rating-title");
let userRate;



 

    ratingButton.forEach( e => {
        // keeps color of rating buttons default color 
        e.addEventListener("click", () => {
            ratingButton.forEach( e => {
                e.style.backgroundColor = "var(--neutral-clr-db)"
                e.style.color = "var(--neutral-clr-lg)"
            })
            // changes button to orange when clicked
            e.style.backgroundColor = "var(--primary-clr-OG)"
            e.style.color = "white"

            // Stores Number 
            userRate = e.innerText;
            });
        });

        // Submit button - checks if user has chosen a rating, 
        // Will not proceed unless value is selected
        button.addEventListener("click", () => {
            if(userRate === undefined){
                alert("Please select a rating")
            } else {
                // Changes to Thank you once submit is pressed
                rateSection.style.display = "none";
                responseSection.style.display = "block"
                ratingTitle.innerText = `You selected ${userRate} out of 5`
            }
    });

