const text = document.getElementById("hello");

let colors = ["red", "blue", "green", "purple", "orange"];
let i = 0;

setInterval(() => {
  text.style.color = colors[i % colors.length];
  text.style.transform = `scale(${1 + Math.sin(i / 2) * 0.3})`;
  i++;
}, 500);
