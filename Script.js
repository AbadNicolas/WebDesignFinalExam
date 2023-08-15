


var today = new Date();

const currentMonth = today.getMonth()

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

const currentDay = today.getDate();
const currentYear = today.getFullYear();

var day = today.getDay();
var daylist = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday ',
  'Thursday',
  'Friday',
  'Saturday',
  
];



document.getElementById("date").innerHTML=(monthNames[currentMonth] + " "+ currentDay + " ,"+ currentYear)

document.getElementById("day").innerHTML=daylist[day]

timeformat24 = true;
function updateClock() {
    const now = new Date();
  
   // const hours = now.getHours();
     hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    

   
    if (timeformat24 == true) {
        if (hours >= 12) {
            prepand = ' ';
        } else {
            
        }
    } else {
        prepand = " ";
        if (hours >= 12) {
            hours = hours - 12;
            prepand = ' PM';

            
        }
        else{prepand = ' AM';

        }
    }
    document.getElementById("hours").innerHTML=hours
    document.getElementById("minutes").innerHTML=minutes
    document.getElementById("seconds").innerHTML=seconds
    document.getElementById("session").innerHTML=prepand
  }
 
  updateClock();
  setInterval(updateClock, 1000);
 

  function ChangeHours(){

    if (timeformat24 == true){
        timeformat24 = false;
        
        document.getElementById("toggle-btn").innerHTML= "12-hs"
    }
    else{
        timeformat24 = true;
        
        document.getElementById("toggle-btn").innerHTML= "24-hs"
    }
  }
 


      







