// FUA
    // continue debugging
    // debug why it cant even seem to find the pictures for each course
    // i tested alr, need to change both the image src and srcset, so issue is with idenfityfing correct img
    // consider adding animated waddling duck and cat sprites across the screen instead or replacing user cursor with a duck if main idea does not work

alert("QUACK");

/*
document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('d2l-course-image img.shown');
    if (images.length > 0) {
        alert("found em");
        var newImageUrl = 'https://static1.thegamerimages.com/wordpress/wp-content/uploads/2020/08/goose-battle-royale.jpeg';
        images.forEach(function(image) {
            image.src = newImageUrl;
            image.srcset = `${newImageUrl} 1080w`;
        });

        if (image.complete) {
            image.onload();
        }
    }
});
*/

/*
document.addEventListener('DOMContentLoaded', function() {
    var courseImageElements = document.querySelectorAll('d2l-course-image');

    courseImageElements.forEach(function(shadowHost) {
        if (shadowHost.shadowRoot) {
            var shadowRoot = shadowHost.shadowRoot;
            var image = shadowRoot.querySelector('img.shown');
            if (image) {
                alert("Found the image inside Shadow DOM");
                var newImageUrlSrc = 'https://static1.thegamerimages.com/wordpress/wp-content/uploads/2020/08/goose-battle-royale.jpeg';
                var newImageUrlSrcSet = 'https://static1.thegamerimages.com/wordpress/wp-content/uploads/2020/08/goose-battle-royale.jpeg 1080w';
                image.src = newImageUrlSrc;
                image.srcset = newImageUrlSrcSet;
            }
        }
    });
});
*/

document.addEventListener('DOMContentLoaded', function() {
    // Select the d2l-enrollment-card tag
    var enrollmentCards = document.querySelectorAll('d2l-enrollment-card');

    // Check if at least one d2l-enrollment-card tag is found
    if (enrollmentCards.length > 0) {
        alert("Found at least one d2l-enrollment-card tag");

        // You can choose to further traverse into the Shadow DOM from here if needed
    } else {
        alert("No d2l-enrollment-card tag found");
    }
});

/*
document.addEventListener('DOMContentLoaded', function() {
    // Select the outermost element with the d2l-enrollment-card tag
    var enrollmentCards = document.querySelectorAll('d2l-enrollment-card');

    enrollmentCards.forEach(function(enrollmentCard) {
        // Access the first level of Shadow DOM (d21-card)
        if (enrollmentCard.shadowRoot) {
            var d2lCard = enrollmentCard.shadowRoot.querySelector('d2l-card');

            // Access the second level of Shadow DOM (div.d2l-enrollment-card-image-container)
            if (d2lCard && d2lCard.shadowRoot) {
                var imageContainer = d2lCard.shadowRoot.querySelector('div.d2l-enrollment-card-image-container');

                // Access the third level of Shadow DOM (d2l-organization-image)
                if (imageContainer && imageContainer.shadowRoot) {
                    var organizationImage = imageContainer.shadowRoot.querySelector('d2l-organization-image');

                    // Access the fourth level of Shadow DOM (d2l-course-image)
                    if (organizationImage && organizationImage.shadowRoot) {
                        var courseImage = organizationImage.shadowRoot.querySelector('d2l-course-image');

                        // Access the inner image with class "shown"
                        if (courseImage && courseImage.shadowRoot) {
                            var image = courseImage.shadowRoot.querySelector('img.shown');

                            // Check if the image is found
                            if (image) {
                                alert("Found the image inside nested Shadow DOMs");

                                // Replace src and srcset for the image
                                var newImageUrl = 'https://static1.thegamerimages.com/wordpress/wp-content/uploads/2020/08/goose-battle-royale.jpeg';
                                image.src = newImageUrl;
                                image.srcset = `${newImageUrl} 1080w`;
                            }
                        }
                    }

                }
            }
        }
    });
});
*/