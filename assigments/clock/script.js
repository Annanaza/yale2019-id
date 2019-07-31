let images = [
//0
  {image: "gotobed.png", speed: "slow"},
//1
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
  let time = new Date(),
  hours = time.getHours(),
  minutes = time.getMinutes(),
  seconds = time.getSeconds();

  // document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);

  if (hours == 0 && minutes < 15 ) {
    spin.src = images[0].image;
    spin.classList.add(images[0].speed)
  }
  else if (hours == 0 && minutes >= 15 ) {
    spin.src = images[1].image;
    spin.classList.add(images[1].speed)
  }

  else if (hours == 2) {
    spin.src = images[2].image;
    spin.classList.add(images[2].speed)
  }

  else if (hours >= 3 && hours <= 6) {
    spin.src = images[3].image;
    spin.classList.add(images[3].speed)
  }

  // if 5am

  else if (hours == 7 && minutes >= 0 ) {
    spin.src = images[4].image;
    spin.classList.add(images[4].speed)
  }

  else if (hours == 8 && minutes >= 0 ) {
    spin.src = images[5].image;
    spin.classList.add(images[5].speed)
  }

  else if (hours == 9 && minutes >= 5 ) {
    spin.src = images[6].image;
    spin.classList.add(images[6].speed)
  }

  else if (hours == 9 && minutes >= 20 ) {
    spin.src = images[7].image;
    spin.classList.add(images[7].speed)
  }

  else if (hours == 9 && minutes >= 30 ) {
    spin.src = images[8].image;
    spin.classList.add(images[8].speed)
  }

  else if (hours == 9 && minutes <= 40 ) {
    spin.src = images[9].image;
    spin.classList.add(images[9].speed)
  }

  else if (hours == 10 && minutes <= 00 ) {
    spin.src = images[10].image;
    spin.classList.add(images[10].speed)
  }

  else if (hours == 10 && minutes <= 20 ) {
    spin.src = images[11].image;
    spin.classList.add(images[11].speed)
  }

  else if (hours == 10 && minutes <= 25 ) {
    spin.src = images[12].image;
    spin.classList.add(images[12].speed)
  }

  else if (hours == 10 && minutes >= 30 ) {
    spin.src = images[11].image;
    spin.classList.add(images[11].speed)
  }

  else if (hours == 11 && minutes >= 00 ) {
    spin.src = images[13].image;
    spin.classList.add(images[13].speed)
  }

  else if (hours == 13 && minutes <= 00 ) {
    spin.src = images[14].image;
    spin.classList.add(images[14].speed)
  }

  else if (hours == 13 && minutes >= 30 ) {
    spin.src = images[13].image;
    spin.classList.add(images[13].speed)
  }

  else if (hours == 13 && minutes >= 40 ) {
    spin.src = images[14].image;
    spin.classList.add(images[14].speed)
  }

  else if (hours == 14 && minutes >= 30 ) {
    spin.src = images[13].image;
    spin.classList.add(images[13].speed)
  }

  else if (hours == 15 && minutes >= 00 ) {
    spin.src = images[14].image;
    spin.classList.add(images[14].speed)
  }

  //else if (hours == 15 && minutes <= 00 ) {
    //spin.src = images[15].image;
  //  spin.classList.add(images[15].speed)
  //}

//  else if (hours == 15 && minutes <= 45 ) {
//    spin.src = images[16].image;
//    spin.classList.add(images[16].speed)
//  }

  else if (hours == 16 && minutes >= 00 ) {
    spin.src = images[13].image;
    spin.classList.add(images[13].speed)
  }

  else if (hours == 18 && minutes <= 60 ) {
    spin.src = images[17].image;
    spin.classList.add(images[17].speed);
  }

  else if (hours == 19 && minutes < 2 ) {
    spin.src = images[7].image;
    spin.classList.add(images[7].speed)
  }

  else if (hours == 19 && minutes >= 2 ) {
    spin.src = images[17].image;
    spin.classList.add(images[7].speed)
  }

  else if (hours == 20 && minutes < 10 ) {
    spin.src = images[18].image;
    spin.classList.add(images[18].speed)
  }

  else if (hours == 20 && minutes >= 10 && minutes < 20 ) {
    spin.src = images[19].image;
    spin.classList.add(images[19].speed)
  }

  else if (hours == 20 && minutes >= 20 ) {
    spin.src = images[18].image;
    spin.classList.add(images[18].speed)
  }

  else if (hours == 21 && minutes >= 00 ) {
    spin.src = images[20].image;
    spin.classList.add(images[20].speed)
  }

  else if (hours == 22 && minutes >= 00 ) {
    spin.src = images[20].image;
    spin.classList.add(images[20].speed)
  }

  else if (hours == 23 && minutes >= 00 ) {
    spin.src = images[20].image;
    spin.classList.add(images[20].speed)
  }

  else {
    spin.src = images[12].image;
    console.log("no Time!");
  }

  getTime(hours, minutes);




  // function harold(standIn) {
  //   if (standIn < 10) {
  //     standIn = '0' + standIn
  //   }
  // return standIn;
  // }
}

setInterval(clock, 1000);

function getTime(a, b) {
  console.log(a, b);
}
