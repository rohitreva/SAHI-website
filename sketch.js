var sahiRed = "#D9332A";
var sahiYellow = "#F2CE4F";

// true on pages that have a full photo at the top
var hasPhoto = false;


function setup() {
  createCanvas(windowWidth, windowHeight);
  hasPhoto = document.querySelector(".banner") !== null;
}


function draw() {
clear();

  var shift = window.scrollY * 0.15;
// to make the top shape disappear when the team photo is there 
  if (!hasPhoto) {
    arcSet(-20, 40 - shift, 400, 7, 0, HALF_PI, sahiYellow, 6, 24);
  }
// to make the different shapes 
  rays(width - 90, 90 - shift, 45, sahiYellow);

  arcSet(width + 20, height + 10 - shift, 360, 7, PI, PI + HALF_PI, sahiRed, 6, 24);

  squiggle(20, height - 70 - shift, 200, 13, sahiRed);

  dotColumn(38, height * 0.44 - shift, 5, 34, sahiRed);
  dotColumn(width - 38, height * 0.22 - shift, 4, 34, sahiRed);
}

function windowResized() {
  // fit to screen
    resizeCanvas(windowWidth, windowHeight);
}
//making the first shape
function arcSet(x, y, size, rings, start, stop, col, weight, gap) {
  noFill();
  stroke(col);
  strokeWeight(weight);
  strokeCap(SQUARE);              

  for (var i = 0; i < rings; i++) {
    var d = size - i * gap;
    arc(x, y, d, d, start, stop);
  }
}


// to make line of dots
function dotColumn(x, y, count, gap, col) {
  noStroke();
  fill(col);

  for (var i = 0; i < count; i++) {
    circle(x, y + i * gap, 7);
  }
}


// to make wavy line
function squiggle(x, y, len, amp, col) {
  noFill();
  stroke(col);
  strokeWeight(3);

  beginShape();
  for (var i = 0; i <= len; i += 5) {
  
    vertex(x + i, y + sin(i * 0.04 + frameCount * 0.02) * amp);
  }
  endShape();
}


//making the rays
function rays(x, y, len, col) {
  stroke(col);
  strokeWeight(5);
  strokeCap(ROUND);

  for (var i = 0; i < 5; i++) {
    var angle = -PI * 0.35 + i * 0.28;       
    line(x + cos(angle) * 26, y + sin(angle) * 26,
         x + cos(angle) * (26 + len), y + sin(angle) * (26 + len));
  }
}
