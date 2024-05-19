document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.research-container');
    const items = container.querySelectorAll('.research-item');
    const itemsPerPage = 4;
    const pageCount = Math.ceil(items.length / itemsPerPage);
    const pagination = document.querySelector('.page-numbers');
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');
    let currentPage = 1;

    function displayItems() {
        let startIndex = (currentPage - 1) * itemsPerPage;
        let endIndex = startIndex + itemsPerPage;

        items.forEach((item, index) => {
            item.style.display = (index >= startIndex && index < endIndex) ? 'block' : 'none';
        });

        pagination.innerHTML = '';
        for (let i = 1; i <= pageCount; i++) {
            const pageButton = document.createElement('button');
            pageButton.innerText = i;
            pageButton.classList.add('page-number');
            if (i === currentPage) {
                pageButton.classList.add('active');
            }
            pageButton.addEventListener('click', () => {
                currentPage = i;
                displayItems();
            });
            pagination.appendChild(pageButton);
        }

        prevButton.disabled = currentPage === 1;
        nextButton.disabled = currentPage === pageCount;
    }

    displayItems();

    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayItems();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentPage < pageCount) {
            currentPage++;
            displayItems();
        }
    });

    const dropdownButton = document.querySelector('.main-category-button');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdownButton.addEventListener('click', () => {
        dropdownContent.classList.toggle('show');
    });

    window.addEventListener('click', (event) => {
        if (!event.target.matches('.main-category-button')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });
});
