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
const dFragment= document.createDocumentFragment(); //document fragment
const navBar = document.querySelector('#navbar__list'); //navigation bar list
const nSection = document.getElementsByTagName('section').length; //number of sections

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build nav menu 

document.addEventListener('DOMContentLoaded', function () { 
    for (let i=0 ; i<nSection;i++) {
        const navItem=document.createElement('li');  //creating nav list items
        dFragment.appendChild(navItem);              //adding nav list items to the document fragment
        //navItem.setAttribute('class',`section${i+1}`);
        navItem.innerHTML=`<a href='#section${i+1}' class='menu__link'>section ${i+1}</a>`; // adding links to nav list items
    }
    navBar.appendChild(dFragment);  //adding nav list items to the nav bar
});

// Scroll to section on link click

navBar.addEventListener('click' , function(e){
    e.preventDefault(); //preventing the default click action
    let bel = document.getElementById(e.target.getAttribute('href').slice(1));  //selecting the section from the nav bar's href attribute
    // console.log(bel)
    bel.scrollIntoView({        //using scrollintoview to scroll smothly to the selected section
        behavior:'smooth',
        block:'center'
    })
});

//Highlight viewed section and corresponding nav link while scrolling

document.addEventListener('scroll', function () {
    for (let i=0;i<nSection;i++) {
        let se = document.querySelector(`#section${i+1}`);  //selecting sections
        let seNav= document.querySelector(`[href="#section${i+1}"]`);   //selecting nav items
        if (se.getBoundingClientRect().top<305 &&se.getBoundingClientRect().top>-305){  // using if condition to determind  if the section viewed or not
            se.classList.add('your-active-class');  //adding your-active-class to the viewed section 
            seNav.classList.add('your-active-class','highlightNav');    //adding your-active-class & highlightNav to nav item's viewed section
        } else {
            se.classList.remove('your-active-class');   //removing your-active-class to the viewed section 
            seNav.classList.remove('your-active-class','highlightNav'); ////removing your-active-class & highlightNav to nav item's viewed section
        }
    } 
});


