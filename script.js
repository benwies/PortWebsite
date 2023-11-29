document.querySelectorAll('.about-link').forEach(link => {
  link.addEventListener('mouseover', () => {
    const dropdownContent = link.querySelector('.dropdown-content');
    dropdownContent.style.display = 'block';

    dropdownContent.addEventListener('mouseenter', () => {
      dropdownContent.style.display = 'block';
    });

    dropdownContent.addEventListener('mouseleave', () => {
      dropdownContent.style.display = 'none';
    });
  });

  link.addEventListener('mouseout', () => {
    const dropdownContent = link.querySelector('.dropdown-content');
    dropdownContent.style.display = 'none';
  });
});
