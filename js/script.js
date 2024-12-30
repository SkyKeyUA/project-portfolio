const sections = document.querySelectorAll('section');
const headerLinks = document.querySelectorAll('header a');

if (1099 >= window.innerWidth) {
  const menuToggle = document.querySelector('.icon-menu');

  menuToggle?.addEventListener('click', () => {
    document.documentElement.classList.toggle('open-menu');
  });
  headerLinks?.forEach((link) => {
    link.addEventListener('click', () => {
      document.documentElement.classList.remove('open-menu');
    });
  });
}

document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href]');
  if (!link) return;
  const href = link.getAttribute('href');
  if (!href.startsWith('#')) return;

  e.preventDefault();

  if (href === '#') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  } else {
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;
    const targetId = href.slice(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      const offsetTop = targetSection.offsetTop - headerHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  }
});

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 200;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if (top >= offset && top < offset + height && id !== null) {
      headerLinks?.forEach((links) => {
        links?.classList.remove('menu__active');
        if (id !== 'contact') {
          document.querySelector('header a[href*=' + id + ']').classList.add('menu__active');
        }
      });
    }
  });
};
