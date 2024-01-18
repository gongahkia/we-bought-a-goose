// FUA
    // PRIMARY
        // continue debugging
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


var mainBody = document.querySelector("d2l-expand-collapse-content"); // this works and i can call this
alert(mainBody);

var root = document.querySelector(".d2l-widget.d2l-tile"); // need to check whether im getting the first instance of the right thing
alert(root);

if (root) {
    var root2 = root.querySelector("d2l-expand-collapse-content");
    if (root2) {
        var root3 = root2.querySelector("d2l-widget-content-padding");
        if (root3) {
            var root4 = root3.querySelector("d2l-my-courses");
            if (root4) {
                var root5 = root4.shadowRoot;
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
                                                            // add code here
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

/*
document.addEventListener('DOMContentLoaded', function() {
    var mainBody = document.querySelector(".homepage-col-8"); // call root class
    alert(mainBody);
});

*/
