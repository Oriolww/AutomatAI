particlesJS("particles-js", {
  particles: {
    number: {
      value: 60
    },
    color: {
      value: "#00d4ff"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.3
    },
    size: {
      value: 3
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00d4ff",
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 1
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      }
    }
  },
  retina_detect: true
});
