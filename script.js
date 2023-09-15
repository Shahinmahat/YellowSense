const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));








let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};


window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const bookMaidBtn = document.getElementById("bookMaidBtn");
const bookCookBtn = document.getElementById("bookCookBtn");
const bookNannyBtn = document.getElementById("bookNannyBtn");

// Function to open the modal
function openModal() {
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}

// Function to redirect to a URL
function redirectToURL(url) {
    window.location.href = url;
}

// Event listeners
openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
// bookMaidBtn.addEventListener("click", () => {
//     redirectToURL("http://3.110.87.191:8000/request_maid");
// });
// bookCookBtn.addEventListener("click", () => {
//     redirectToURL("http://3.110.87.191:8000/request_cook");
// });
// bookNannyBtn.addEventListener("click", () => {
//     redirectToURL("http://3.110.87.191:8000/request_nanny");
// });


// Add this code to your existing script.js file

document.addEventListener('DOMContentLoaded', function () {
    // Find the "Book a Maid" button by its ID
    const bookMaidBtn = document.getElementById('bookMaidBtn');

    // Add a click event listener to the button
    bookMaidBtn.addEventListener('click', function () {
        // Redirect to the "book_maid.html" page
        window.location.href = 'book_maid.html';
    });
});


// Close the modal if the user clicks outside of it
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});


//book cook
document.addEventListener('DOMContentLoaded', function () {
    // Find the "Book a Maid" button by its ID
    const bookMaidBtn = document.getElementById('bookCookBtn');

    // Add a click event listener to the button
    bookMaidBtn.addEventListener('click', function () {
        // Redirect to the "book_maid.html" page
        window.location.href = 'book_cook.html';
    });
});


// Close the modal if the user clicks outside of it
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

//book nanny
document.addEventListener('DOMContentLoaded', function () {
    // Find the "Book a Maid" button by its ID
    const bookMaidBtn = document.getElementById('bookNannyBtn');

    // Add a click event listener to the button
    bookMaidBtn.addEventListener('click', function () {
        // Redirect to the "book_maid.html" page
        window.location.href = 'book_nanny.html';
    });
});


// Close the modal if the user clicks outside of it
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});


