









//inner smaller circle cursor
const circle = document.getElementsByClassName("circle")[0];
//outer following circle
const circle2 = document.getElementsByClassName("circle2")[0];

let mouseX = 0;
let mouseY = 0;

let ballX = 0;
let ballY = 0;

let ball2X = 0;
let ball2Y = 0;

let speed1 = 1; //how fast ball catches up to mouse pointer;
let speed2 = 0.05;

/**
 * Use this for reference: https://gist.github.com/idettman/a0118dd04a2f8fc4245018f6dc5ed387
 */
function animate() {
  let distX = mouseX - ballX;
  let distY = mouseY - ballY;

  ballX = ballX + distX * speed1;
  ballY = ballY + distY * speed1;

  circle.style.left = ballX + "px";
  circle.style.top = ballY + "px";

  requestAnimationFrame(animate);
}
animate();

document.addEventListener("mousemove", function (mouseEvent) {
  mouseX = mouseEvent.pageX;
  mouseY = mouseEvent.pageY;
});

document.addEventListener(
  "click",
  function (e) {
    e.preventDefault;
    circle.classList.remove("active");

    void circle.offsetWidth;

    circle.classList.add("active");
  },
  false
);

function animate2() {
  let distX2 = mouseX - ball2X;
  let distY2 = mouseY - ball2Y;

  ball2X = ball2X + distX2 * speed2;
  ball2Y = ball2Y + distY2 * speed2;

  circle2.style.left = ball2X + "px";
  circle2.style.top = ball2Y + "px";

  requestAnimationFrame(animate2);
}
animate2();


document.addEventListener("mousemove", function (e) {
  mouse2X = e.pageX;
  mouse2Y = e.pageY;
});

//When you hover <a> circle 2 scales up
$(document).ready(function(){
  $(function() {
    $("a").hover(function() {
      $('.circle2').css({'transform': 'scale(1.5) translate(-35%,-35%)'});
  }, function() {
      $('.circle2').css('transform', '');
  });
});
});


