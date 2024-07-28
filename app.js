document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById('sections');
    const sections = document.querySelectorAll('section');
    const clickButton = document.getElementById('butt');
    
    const navList = document.createElement('ul');
    sections.forEach(section => {
        const navItem = document.createElement('li');
        const navLink = document.createElement('a');
        navLink.textContent = section.dataset.nav;
        navLink.href = `#${section.id}`;
        navLink.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(navLink.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
        navItem.appendChild(navLink);
        navList.appendChild(navItem);
    });
    navbar.appendChild(navList);

    const isInViewport = (section) => {
        const rect = section.getBoundingClientRect();
        return rect.top >= 0 && rect.top < window.innerHeight / 2;
    };

    const setActiveSection = () => {
        sections.forEach(section => {
            if (isInViewport(section)) {
                section.classList.add('active');
                document.querySelector(`a[href="#${section.id}"]`).classList.add('active');
            } else {
                section.classList.remove('active');
                document.querySelector(`a[href="#${section.id}"]`).classList.remove('active');
            }
        });
    };

    const toggleclickButton = () => {
        if (window.scrollY > window.innerHeight) {
            clickButton.style.display = 'block';
        } else {
            clickButton.style.display = 'none';
        }
    };

    clickButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        setActiveSection();
        toggleclickButton();
    });
});
