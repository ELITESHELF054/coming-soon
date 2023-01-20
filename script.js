
// The date and time we are counting down to:
var countDownDate = new Date("Feb 03, 2023 01:00:00").getTime();


// To run the function every second
var updateTime = setInterval(function() {
    var now = new Date().getTime();
    var timeLeft = countDownDate - now;

    // Calculating the days, hours, minutes and seconds left:
    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / ( 1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Output to the various elements:
    document.getElementById("day").innerHTML = days
    document.getElementById("hour").innerHTML = hours
    document.getElementById("minutes").innerHTML = minutes
    document.getElementById("seconds").innerHTML = seconds
    
    // Display message when countdown is over:
    if(timeLeft < 0) {
       clearInterval(updateTime);
       document.getElementById("day").innerHTML = ""
       document.getElementById("hour").innerHTML = ""
       document.getElementById("minutes").innerHTML = ""
       document.getElementById("seconds").innerHTML = ""
       document.getElementById("end").innerHTML = "TIME TO LAUNCH!"
    }
}, 1000);

updateTime();




// To display contact Info
function displayContactInfo() {
    var contactInfo = `<div class="display-text">Email us at: eliteshelf054@gmail.com <br>Phone Number: +234 817 849 5978 <hr> <div><p class="follow-p">Follow us:</p>
    <a href="https://www.facebook.com/100089638351674/"><br /><img src="coming-soon/images/facebook.png" alt="Facebook Logo" id="facebook-logo"></a> 

    <a href="https://twitter.com/elite_shelf?t=WQUEaAKjreWCaiivP2CJDA&s=09"><img src="coming-soon/images/twiter.jpeg" alt="Twiter Logo"></a> 

    <a href="https://www.instagram.com/invites/contact/?i=w4mrh0fw73u6&utm_content=qepfrl1"><img src="coming-soon/images/instagram.png" alt="Instagram Logo"></a>

    <a href="https://www.linkedin.com/in/elite-shelf"><img src="coming-soon/images/LinkedIn.png" alt="LinkedIn Logo" id="linkedin-logo"></a> <i class="fa-solid fa-x close-icon" fa-2x onclick="closeDisplay()"></i></div> </div>`
    
    
    document.getElementById("contact-us").innerHTML = contactInfo;

    var diplay = document.querySelector(".contact-info");
    diplay.classList.remove("active"); //This removes a class of active from the popup div to make it vissible. It happens when the "Contact Us" button is clicked.
    
}

// To close the contact info popup:
function closeDisplay() {

    var contactUs = document.querySelector(".contact-info");
    
    contactUs.classList.add("active"); //This will add a class of active to the popup div to make it close (hidden). It happens when the 'X' icon is clicked. 
    
}
