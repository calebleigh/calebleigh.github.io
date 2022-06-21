var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

color1.addEventListener("input", function(){  
  document.documentElement.style
    .setProperty('--color1', color1.value);
})

color2.addEventListener("input", function(){  
  document.documentElement.style
    .setProperty('--color2', color2.value);
})


document.addEventListener("click",function (e){
  if(e.target.classList.contains("gallery-item")){
      const src = e.target.getAttribute("src");
      document.querySelector(".modal-img").src = src;
      const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
      myModal.show();
  }
})


function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);



// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.backgroundColor = "#292E34";
    document.getElementById("navbar").style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)";
  } else {
    document.getElementById("navbar").style.backgroundColor = "#daaf5100";
    document.getElementById("navbar").style.boxShadow = "none";
  }
}