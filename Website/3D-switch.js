document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.image-3d-wrapper');
  const toggleBtn = wrapper.querySelector('.toggle-3d-btn');
  const staticImage = wrapper.querySelector('img.static-image');
  const modelViewer = wrapper.querySelector('model-viewer.model');
  const icon3d = toggleBtn.querySelector('.toggle-3d-icon');
  const iconImg = toggleBtn.querySelector('.toggle-img-icon');

  toggleBtn.addEventListener('click', () => {
    const is3DVisible = modelViewer.style.display === 'block';

    if (is3DVisible) {
      icon3d.style.display = 'block';
      staticImage.style.display = 'block';
      iconImg.style.display = 'none';
      modelViewer.style.display = 'none';
    } else {
      icon3d.style.display = 'none';
      staticImage.style.display = 'none';
      iconImg.style.display = 'block';
      modelViewer.style.display = 'block';
    }
  });
});
