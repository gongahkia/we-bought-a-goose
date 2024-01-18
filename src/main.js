// FUA
    // PRIMARY
        // continue debugging
            // further debug
            // parse entire dom structure to determine the shadowroot structure and parse up down
            // ensure im actually calling the correct div of class d2l-widget and d2l-tile
            // i tested alr, need to change both the image src and srcset, so issue is with identifying correct img
    // SECONDARY
        // consider adding animated waddling duck and cat sprites across the screen instead or replacing user cursor with a duck if main idea does not work
        // work out what sprites i need and pair down size of sprite directory
        // remove added sprites if not using, consider similar to chillquarium

var newImageUrlSrc = 'https://static1.thegamerimages.com/wordpress/wp-content/uploads/2020/08/goose-battle-royale.jpeg';
var newImageUrlSrcSet = 'https://static1.thegamerimages.com/wordpress/wp-content/uploads/2020/08/goose-battle-royale.jpeg 1080w';

alert("QUACK");


/*
var mainBody = document.querySelector("d2l-expand-collapse-content"); // this works and i can call this
alert(mainBody);
*/

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
alert(root14);
var desiredImage = root14.querySelector("img");
alert(desiredImage);
desiredImage.src = newImageUrlSrc;
desiredImage.src = newImageUrlSrcSet;


/*
var root = document.querySelector(".d2l-widget.d2l-tile"); // need to check whether im getting the first instance of the right thing
alert(root);
if (root) {
    var root2 = root.querySelector(".d2l-widget-content");
    alert(root2);
    if (root2) {
        var root3 = root2.querySelector("d2l-widget-content-padding");
        alert(root3);
        if (root3) {
            var root4 = root3.querySelector("d2l-my-courses");
            alert(root4);
            if (root4) {
                var root5 = root4.shadowRoot;
                alert(root5);
                if (root5) {
                    var root6 = root5.querySelector("d2l-my-courses-container");
                    if (root6) {
                        var root7 = root6.shadowRoot;
                        if (root7) {
                            var root8 = root7.querySelector("d2l-tabs");
                            if (root8) {
                                var root9 = root8.querySelector("d2l-tab-panel");
                                if (root9) {
                                    var root10 = root9.querySelector("d2l-my-courses-content");
                                    if (root10) {
                                        var root11 = root10.shadowRoot;
                                        if (root11) {
                                            var root12 = root11.querySelector("d2l-my-courses-card-grid");
                                            if (root12) {
                                                var root13 = root12.shadowRoot;
                                                if (root13) {
                                                    var root14 = root13.querySelector(".course-card-grid.columns-3");
                                                    if (root14) {
                                                        var root15 = root14.querySelector("d2l-enrollment-card");
                                                        if (root15) {
                                                            var root16 = root15.shadowRoot;
                                                            if (root16) {
                                                                var root17 = root16.querySelector("d2l-card");
                                                                if (root17) {
                                                                    var root18 = root17.querySelector('div[slot="header"]');
                                                                    if (root18) {
                                                                        var root19 = root18.querySelector(".d2l-enrollment-card-image-container");
                                                                        if (root19) {
                                                                            var root20 = root19.querySelector("d2l-organization-image");
                                                                            if (root20) {
                                                                                var root21 = root20.shadowRoot;
                                                                                if (root21) {
                                                                                    var root22 = root21.querySelector("d2l-course-image");
                                                                                    if (root22) {
                                                                                        var root23 = root22.shadowRoot;
                                                                                        if (root23) {
                                                                                            alert(root23.src);
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
*/

/*
document.addEventListener('DOMContentLoaded', function() {
    var mainBody = document.querySelector(".homepage-col-8"); // call root class
    alert(mainBody);
});

*/
