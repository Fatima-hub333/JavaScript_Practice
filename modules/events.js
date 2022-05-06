// Events

const btn = document.getElementById('myBtn');
btn.addEventListener('mouseover', (e) => {
  btn.style.background = 'blue';
  console.log(e);
});