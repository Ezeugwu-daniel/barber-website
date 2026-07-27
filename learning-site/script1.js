const button = document.getElementById('button');
const heading = document.getElementById('h1');
let isClicked = false;

if (button && heading) {
  button.addEventListener('click', function () {
    isClicked = !isClicked;
    heading.textContent = isClicked ? "LET'S WORK TOGETHER!" : 'MY PERSONAL PORTFOLIO';
  });
}