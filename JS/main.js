const openNav = document.querySelector('.bi-x-lg');

const closeNav = document.querySelector('.bi-x-lg');

const navList = document.querySelector('nav ul');

openNav.addEventListener('click', () => {
  openNav.style.display = 'none';
  closeNav.style.display = 'block';
  navList.style.display = 'block';
});

closeNav.addEventListener("click", () => {
  openNav.style.display = "block";
  closeNav.style.display = "none";
  navList.style.display = "none";
});

// navList.addEventListener()