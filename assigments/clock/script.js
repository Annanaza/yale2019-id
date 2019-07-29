
let images =[
{image: "gotobed.png", speed: "slow"},
{image: "callafriend.png", speed: "meduim"},
{image: "watchyoutube.png", speed: "fast"},
{image: "sleep.png", speed: "slow"},
{image: "wakeup!.png", speed: "medium"},
{image: "wakeup!!!.png", speed: "fast"},
{image: "5moremins.png", speed: "fast"},
{image: "petyourdog.png", speed: "slow"},
{image: "notimetoeat.png", speed: "medium"},
{image: "domakeup.png", speed: "medium"},
{image: "redomakeup.png", speed: "fast"},
{image: "getdressed.png", speed: "medium"},
{image: "stareatonespot.png", speed: "slow"},
{image: "doassignment.png", speed: "medium"},
{image: "procrastinate.png", speed: "slow"},
{image: "takeabreak.png", speed: "medium"},
{image: "petstrangersdog.png", speed: "medium"},
{image: "rushhome.png", speed: "fast"},
{image: "cookdinner.png", speed: "medium"},
{image: "dance.png", speed: "medium"},
{image: "takeabath.png", speed: "slow"},

]

let spin = document.querySelector("#spin img");

// function to get time
// function to update time every second?
// return an image based on time

// if time is between 3:15 and 3:18 return "pet dog"

function clock() {
var time = new Date(),

hours = time.getHours(),

minutes = time.getMinutes(),

seconds = time.getSeconds();

document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);

function harold(standIn) {
if (standIn < 10) {
standIn = '0' + standIn
}
return standIn;
}
}
setInterval(clock, 1000);
