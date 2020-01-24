/* --- Navigation Bar --- */
/* Set the width of the navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.querySelector("nav").style.width = "250px";
    /*if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) > 750) {
      document.querySelector("main").style.marginLeft = "250px";
    }*/
    document.querySelector(".menu-bars").innerHTML = '<i class="fa fa-times fa-3x" aria-hidden="true"></i>';
  }
  
  /* Set the width of the navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.querySelector("nav").style.width = "0";
    document.querySelector("main").style.marginLeft = "0";
    document.querySelector(".menu-bars").innerHTML = '<i class="fa fa-bars fa-3x" aria-hidden="true"></i>';
  }


  /* Toggle the nav bar */
  function toggleNav() {
      if (document.querySelector("nav").style.width === "250px") {
          closeNav();
      } else {
          openNav();
      }
  }

  /* Close Menu when Link is clicked*/
  const menuLinks = document.querySelector("nav ul");

  // Add Eventlistener to menu links, so navigation closes on click
  menuLinks.addEventListener('click', function(event) {
    if (event.target.tagName.toLowerCase() === 'li') {
      closeNav(); 
    }
  });

  

  /* Load particles-js */
  particlesJS('particles-js', {
      "particles": {
      "number": {
        "value": 39,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 80,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 300,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 5,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 800,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 800,
          "size": 80,
          "duration": 2,
          "opacity": 0.8,
          "speed": 3
        },
        "repulse": {
          "distance": 400,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });