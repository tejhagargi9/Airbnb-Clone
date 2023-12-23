var rightArrowCounter = 0;
var dialog = document.querySelector("dialog");

var arrimg = [
  "Casuals",
  "NationalParks",
  "Gardens",
  "Libraries",
  "Lux's",
  "Luxuries",
  "trees",
  "Sea",
  "Hotels",
  "Villas",
  "bests",
  "hotels",
  "Duluxe",
  "Church",
  "Games",
  "buildings",
  "Games",
  "Infrastcture",
  "Dubai",
  "Hongkong",
  "Singapore",
  "Abu Dhabi",
  "Malaysia",
  "Srilanka",
  "NewYork",
];

document.querySelector("#navpart4").addEventListener("click", () => {
  dialog.showModal();
  document.querySelector("#main").style.position = "fixed";
});
document.querySelector(".closeDialog").addEventListener("click", () => {
  dialog.close();
  document.querySelector("#main").style.position = "initial";
});

function makeImages() {
  var clutter = "";
  for (var i = 1; i <= 25; i++) {
    clutter += `<div class="imagesbox" value="${i}">
        <img src="imgs/${i}.jpg" alt="">
        <p>${arrimg[i - 1]}</p>
    </div>`;
  }
  document.querySelector("#navbardownpart1").innerHTML = clutter;
}
makeImages();

function makedisplayImgs() {
  var clutter1 = "";
  for (var j = 0; j <= 35; j++) {
    var rand = Math.floor(Math.random() * 40) + 3;
    clutter1 += `<div class="display">
        <div class="displayImg">
          <img src="imgs/j${j}.webp" alt="" />
        </div>
        <p>Bangalore, Inida</p>
        <p>Lorem ipsum, dolor sit amet consecter...</p>
        <p>24,546km</p>
        <p><b>₹${rand},000</b> <span>night</span></p>
      </div>`;
  }
  document.querySelector(".container").innerHTML = clutter1;
}
makedisplayImgs();

document.querySelector("#leftArrow").addEventListener("click", () => {
  var tl = gsap.timeline();
  tl.to(".imagesbox", {
    x: "+=200",
  });
  rightArrowCounter--;
  makeArrowVisible();
});
document.querySelector("#rightArrow").addEventListener("click", () => {
  var t1 = gsap.timeline();
  t1.to(".imagesbox", {
    x: "-=200",
  });
  rightArrowCounter++;
  makeArrowVisible();
});

function makeArrowVisible() {
  if (rightArrowCounter > 0) {
    document.querySelector("#leftArrow").style.display = "block";
  } else {
    document.querySelector("#leftArrow").style.display = "none";
  }

  if (rightArrowCounter == 7) {
    document.querySelector("#rightArrow").style.display = "none";
  } else {
    document.querySelector("#rightArrow").style.display = "block";
  }
}

var navbardowntaps = document.querySelectorAll(".imagesbox");
navbardowntaps.forEach((e) => {
  e.addEventListener("click", () => {
    var paragraphs = e.querySelectorAll("p");
    paragraphs.forEach((e) => {
      console.log(e.tagName);
      AnotherPlace(e.innerHTML);
    });
  });
});

var counter1 = 0;
var counter = 0;

function AnotherPlace(place) {
  if (place == "NationalParks") {
    console.log("counter1" + counter1);
    if (counter1 == 0) {
      if (counter == 1) {
        counter = 0;
      }
      document.querySelector(".container").style.display = "none";
      var clutter2 = "";
      for (var k = 0; k <= 35; k++) {
        var rand = Math.floor(Math.random() * 40) + 3;
        clutter2 += `<div class="display">
            <div class="displayImg">
              <img src="imgs/k${k}.webp" alt="" />
            </div>
            <p>Bangalore, Inida</p>
            <p>Lorem ipsum, dolor sit amet consecter...</p>
            <p>24,546km</p>
            <p><b>₹${rand},000</b> <span>night</span></p>
          </div>`;
      }
      counter1++;
      if (counter == 0) {
        counter++;
      }
      document.querySelector(".container").innerHTML = clutter2;
      document.querySelector(".container").style.display = "flex";
    } else {
      console.log("ByeCounter1");
    }
  } else if (place == "Casuals") {
    console.log("counter" + counter);
    if (counter == 0) {
    } else {
      if (counter1 == 1) {
        counter1 = 0;
      }
      document.querySelector(".container").style.display = "none";
      var clutter2 = "";
      for (var k = 0; k <= 35; k++) {
        var rand = Math.floor(Math.random() * 40) + 3;
        clutter2 += `<div class="display">
            <div class="displayImg">
              <img src="imgs/j${k}.webp" alt="" />
            </div>
            <p>Bangalore, Inida</p>
            <p>Lorem ipsum, dolor sit amet consecter...</p>
            <p>24,546km</p>
            <p><b>₹${rand},000</b> <span>night</span></p>
          </div>`;
      }
      document.querySelector(".container").innerHTML = clutter2;
      document.querySelector(".container").style.display = "flex";
      console.log("counter" + counter);
      counter--;
    }
  } else {
    console.log("Bye");
  }
}
