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