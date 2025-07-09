document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.toggle-3d-btn');
  const img = document.querySelector('.static-image');
  const viewer = document.querySelector('model-viewer');

  if (!btn || !img || !viewer) return;

  let showing3D = false;

  btn.addEventListener('click', () => {
    showing3D = !showing3D;

    img.style.display = showing3D ? 'none' : 'block';
    viewer.classList.toggle('hidden-3d');

    btn.innerHTML = showing3D
      ? '<i class="fas fa-image"></i> Toon afbeelding'
      : '<i class="fas fa-cube"></i> Bekijk in 3D';
  });
});
