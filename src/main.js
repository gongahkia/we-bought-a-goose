// FUA
    // PRIMARY
        // change image for elearn login https://elearn.smu.edu.sg/d2l/loginh/ to ducks
        // continue debugging
            // further debug
            // parse entire dom structure to determine the shadowroot structure and parse up down
            // ensure im actually calling the correct div of class d2l-widget and d2l-tile
            // i tested alr, need to change both the image src and srcset, so issue is with identifying correct img
    // SECONDARY
        // consider adding animated waddling duck and cat sprites across the screen instead or replacing user cursor with a duck if main idea does not work
        // work out what sprites i need and pair down size of sprite directory
        // remove added sprites if not using, consider similar to chillquarium

/*
var mainBody = document.querySelector("d2l-expand-collapse-content"); // this works and i can call this
alert(mainBody);
*/

var newImageUrlSrc = 'https://static1.thegamerimages.com/wordpress/wp-content/uploads/2020/08/goose-battle-royale.jpeg';
var newImageUrlSrcSet = 'https://static1.thegamerimages.com/wordpress/wp-content/uploads/2020/08/goose-battle-royale.jpeg 1080w';

alert("QUACK");

var root1 = document.querySelector(".d2l-widget.d2l-tile d2l-my-courses");
var root2 = root1.shadowRoot;
var root3 = root2.querySelector("d2l-my-courses-container");
var root4 = root3.shadowRoot;
var root5 = root4.querySelector("d2l-tabs d2l-my-courses-content");
var root6 = root5.shadowRoot;
var root7 = root6.querySelector("d2l-my-courses-card-grid");
var root8 = root7.shadowRoot;
var root9 = root8.querySelector("d2l-enrollment-card");
var root10 = root9.shadowRoot;
var root11 = root10.querySelector("d2l-organization-image");
var root12 = root11.shadowRoot;
var root13 = root12.querySelector("d2l-course-image");
var root14 = root13.shadowRoot;
var desiredImage = root14.querySelector("img");
alert(desiredImage);
desiredImage.src = newImageUrlSrc;
desiredImage.srcset = newImageUrlSrcSet;

/*
document.addEventListener('DOMContentLoaded', function() {
    var mainBody = document.querySelector(".homepage-col-8"); // call root class
    alert(mainBody);
});
*/
