// information.classList.remove('position-absolute');
// information.classList.add('position-fixed');
// SETUP NAVBAR SCROLL EVENT LISTENER
function setupNavbarScroll() {
    const navbar = document.querySelector('.navbar');

    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 400) {
                navbar.style.backgroundColor = "rgba(0,0,0,0.6)";

            } else {
                navbar.style.backgroundColor = "rgba(0,0,0,0)";
            }
        });
    } else {
        console.error('Navbar element not found');
    }

    // SOCIAL ICONS 
    const socialLinks = document.querySelectorAll('.social'); // Select all elements with the class 'social'
    window.addEventListener('scroll', function() {
        if (window.scrollY > 400) {            
            socialLinks.forEach(function(link) { // Loop through each 'social' element
                link.classList.remove('text-light');
                link.classList.add('text-info');
            });

        } 
        else {            
            socialLinks.forEach(function(link) { // Loop through each 'social' element
                link.classList.add('text-light');
                link.classList.remove('text-info');
            });
        }
    });

}setupNavbarScroll();
// SETUP NAVBAR SCROLL EVENT LISTNER

// COUNTER INCREAMENT
document.addEventListener('DOMContentLoaded', function() {
    var store = document.getElementById('store');
    var counters = document.querySelectorAll('.counter');
    var hasCounted = false;

    store.addEventListener('mouseenter', function() {
        if (!hasCounted) {
            hasCounted = true;
            counters.forEach(function(counter) {
                var target = parseInt(counter.getAttribute('data-target'));
                var count = 0;

                // Use a data attribute or a random interval for each counter
                var intervalTime = parseInt(counter.getAttribute('data-interval')) || Math.floor(Math.random() * 50) + 10;
                
                var interval = setInterval(function() {
                    counter.querySelector('h1').textContent = count;
                    if (count >= target) {
                        clearInterval(interval);
                    }
                    count++;
                }, intervalTime); 
            });
        }
    });
});
// COUNTER INCREAMENT

// JS CODE TO CHNAGE ICON STATE IN STORE COMPONENT
// Function to toggle icon state
function toggleIconState(icon, baseClass, activeClass, activeColor) {
    icon.classList.toggle(baseClass);
    icon.classList.toggle(activeClass);
    icon.classList.toggle(activeColor);
}
// List of icons with their respective classes
const icons = [
    { selector: '.bi-heart', baseClass: 'bi-heart', activeClass: 'bi-heart-fill', activeColor: 'text-danger' },
    { selector: '.bi-cart-plus', baseClass: 'bi-cart-plus', activeClass: 'bi-cart-plus-fill', activeColor: 'text-primary' },
    { selector: '.bi-bookmark-plus', baseClass: 'bi-bookmark-plus', activeClass: 'bi-bookmark-plus-fill', activeColor: 'text-success' }
];
// Apply event listeners to each icon type
icons.forEach(({ selector, baseClass, activeClass, activeColor }) => {
    document.querySelectorAll(selector).forEach(icon => {
        icon.addEventListener('click', () => toggleIconState(icon, baseClass, activeClass, activeColor));
    });
});
// JS CODE TO CHNAGE ICON STATE IN STORE COMPONENT


// MAKING PARALAXX CONTENT FIXED AND DIFFERENT SCROLL SIZES
document.addEventListener('scroll', function() {
    const scrollY = window.scrollY;     
    // console.log(scrollY);

    const goal = document.querySelector('#goal');
    const home=document.querySelector('#homeL');
    const about=document.querySelector('#aboutL');
    const store=document.querySelector('#storeL');

    // For Component 1 (800px to 1000px)
    if (scrollY >= 1100 && scrollY <= 8100) {
        goal.classList.remove('d-none');
        goal.classList.add('d-block');
    } else {
        goal.classList.remove('d-block');
        goal.classList.add('d-none');
    }

    // for navbar indications on sections
        // FOR HOME SECTION
        if (scrollY >= 0 && scrollY <= 830) {
            home.classList.add('active');
        } else {
            home.classList.remove('active');
        }
        // FOR ABOUT SECTION
    if (scrollY >= 840 && scrollY <= 2150) {
        about.classList.add('active');
    } else {
        about.classList.remove('active');
    }
        // FOR ABOUT SECTION
    if (scrollY >= 2160 && scrollY <= 3680) {
        store.classList.add('active');
    } else {
        store.classList.remove('active');
    }
    // FOR HOME ATLAST
    if(scrollY>=3670){home.classList.add('active');}
});
// MAKING PARALAXX CONTENT FIXED AND DIFFERENT SCROLL SIZES