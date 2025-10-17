const button = document.getElementById('colorBtn');

button.addEventListener('click', () => {
  const colors = ['#f4f4f4', '#e0f7fa', '#ffebee', '#fff9c4', '#e8f5e9'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});
