const button = document.getElementById('colorBtn');

button.addEventListener('click', () => {
  const colors = ['#f4f4f4', '#e0f7fa', '#ffebee', '#fff9c4', '#e8f5e9'];
  const textColors = ['#333', '#00796B', '#B71C1C', '#F57F17', '#1B5E20'];
  
  const randomIndex = Math.floor(Math.random() * colors.length);
  
  document.body.style.backgroundColor = colors[randomIndex];
  document.body.style.color = textColors[randomIndex];

  console.log("🎨 Couleur changée avec succès !");
});

console.log("👋 Bienvenue sur mon mini-portfolio !");
