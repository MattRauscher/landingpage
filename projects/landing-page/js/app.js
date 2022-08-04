/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function isInViewPort(element){
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >=0 &&
        rect.bottom <= ( window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)  
    );
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const navFragment = document.createDocumentFragment();
const sections = document.getElementsByTagName('section')

function buildNav(){
    
    for(let i = 0; i<sections.length; i++){
        let sectionText = sections[i].firstElementChild.firstElementChild.innerText;
        let li = document.createElement("li");
        li.innerHTML = sectionText;
        li.classList.add('menu__link');
        li.classList.add(sections[i].id);

        navFragment.appendChild(li);

    }
    const navBar = document.getElementById('navbar__list');
    navBar.appendChild(navFragment);

}

// Add class 'active' to section when near top of viewport

function addActiveWhenViewport(){
    for (const section of sections){
        console.log('viewport '+isInViewPort(section))
        isInViewPort(section) ? 
        section.classList.add('your-active-class') :
        section.classList.remove('your-active-class');
    };
};

// Scroll to anchor ID using scrollTO event


function scrollToAnchor(anchor){
    const rect = anchor.getBoundingClientRect();

    scrollTo(rect.x, rect.y);
}
const navSections = document.getElementById('navbar__list');
for (navSection in navSections){
    document.addEventListener("click", function(){
        navSection.classList

    })
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNav();
// Scroll to section on link click



// Set sections as active

document.addEventListener("scroll", function(){
    addActiveWhenViewport()
});
