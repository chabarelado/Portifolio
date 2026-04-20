var layerCount = 5;
var starCount = 400;
var maxTime = 30;
var universe = document.getElementById("universe");
var w = window;
var d = document;
var e = d.documentElement;
var g = d.getElementsByTagName("body")[0];
var width = w.innerWidth || e.clientWidth || g.clientWidth;
var height = Math.max(
    d.body.scrollHeight, 
    d.body.offsetHeight, 
    e.clientHeight, 
    e.scrollHeight, 
    e.offsetHeight
);
if (universe) {
for (var i = 0; i < starCount; ++i) {
  var ypos = Math.round(Math.random() * height);
  var star = document.createElement("div");
  var speed = 1000 * (Math.random() * maxTime + 1);
  star.setAttribute("class", "star" + (3 - Math.floor(speed / 1000 / 8)));
  star.style.backgroundColor = "#9006f3";

  universe.appendChild(star);
  star.animate(
    [
      {
        transform: "translate3d(" + width + "px, " + ypos + "px, 0)"
      },
      {
        transform:
          "translate3d(-" + Math.random() * 256 + "px, " + ypos + "px, 0)"
      }
    ],
    {
      delay: Math.random() * -speed,
      duration: speed,
      iterations: 1000
    }
  );
}
}

const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.m-item').forEach(item => {
    observer.observe(item);
});