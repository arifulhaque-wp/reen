// form js
const form = document.querySelector(".s_form");
const input = document.querySelector(".s_input");

form.addEventListener("click", function(){
  if (form.classList.contains("open")) {
    input.classList.remove("open");
    form.classList.remove("open");
  }
  else {
    input.classList.add("open");
    form.classList.add("open");
  }
});

// banner slider
var slider = tns({
  container: '.reen-slider',
  items: 1,
  slideBy: 'page',
  autoplay: true,
  controlsText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
  navPosition: "bottom"
});

// work slider
var slider = tns({
  container: '.work-slider',
  items: 4,
  responsive: {
    640: {
      edgePadding: 20,
      // gutter: 20,
      items: 2
    },
    700: {
      // gutter: 30
    },
    900: {
      items: 4
    }
  },
  swipeAngle: false,
  autoplay: true,
  controls: true,
  controlsPosition: "bottom",
  controlsText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
  navPosition: "bottom",
  gutter: 30,
  speed: 300
});

