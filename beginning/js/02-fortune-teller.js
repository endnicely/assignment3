/*eslint-env browser*/
function tellFortune(childenNum, partnerName, geolocation, jobTitle) {
    'use strict';
    window.document.write("You will be a " +  jobTitle + " in " + geolocation + ", and married to " + partnerName + " with " + childenNum + " kids.<br><br>");
    
}

tellFortune(3, "Bill Gates", "Seattle", "philanthropist");
tellFortune(0, "no one", "India", "monk");
tellFortune(2, "Zak", "San Diego", "web developer");
