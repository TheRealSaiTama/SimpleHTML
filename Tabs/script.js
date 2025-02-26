const tabContents = document.querySelectorAll('.tab-content');
const tabLinks = document.querySelectorAll('.tabs ul li a');
const tabItems = document.querySelectorAll('.tabs ul li');

function hideAllTabs() {
    tabContents.forEach(tab => {
        tab.style.display = 'none';
    });
    tabItems.forEach(item => {
        item.classList.remove('active');
    });
}

function showTab(tabId) {
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.style.display = 'block';
    }
}

tabLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const tabId = this.getAttribute('href').substring(1);
        hideAllTabs();
        showTab(tabId);
        this.parentElement.classList.add('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    hideAllTabs();
    if (tabContents.length > 0) {
        tabContents[0].style.display = 'block';
        tabItems[0].classList.add('active');
    }
});
