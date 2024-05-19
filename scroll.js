document.addEventListener('DOMContentLoaded', (event) => {
    const scrollIndicator = document.getElementById('scroll-indicator');
    const aboutUsSection = document.getElementById('about-us-section');

    window.addEventListener('scroll', () => {
        const sectionBottom = aboutUsSection.offsetTop + aboutUsSection.offsetHeight;
        if (window.scrollY > sectionBottom) {
            scrollIndicator.style.display = 'none';
        } else {
            scrollIndicator.style.display = 'block';
        }
    });
});
