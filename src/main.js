// FUA
    // PRIMARY
        // work out how to enable hot reloading of lazy loaded images to ensure i dont need to manually reload the extension to show goose
            // perhaps consider adding a check for whether DOM content has loaded
        // might need to add a check for whether a div in the header next to the image has already been added to avoid multiple university links
        // work out how to change images on multiple pages
            // change image for elearn login https://elearn.smu.edu.sg/d2l/loginh/ to ducks
        // debug
            // work out why this doesn't work for Chrome 
    // SECONDARY
        // find and add more goose sprites to add to the extension
        // consider adding animated waddling duck and cat sprites across the screen instead or replacing user cursor with a duck if main idea does not work
        // work out what sprites i need and pair down size of sprite directory
        // remove added sprites if not using, consider similar to chillquarium
        // send nichole astin for playtesting

/*
var mainBody = document.querySelector("d2l-expand-collapse-content"); // this works and i can call this
alert(mainBody);
*/

// ---------- PRESETS -----------

var gooseLinkArray = [
                        "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2019/10/Untitled-Goose-Game-Goose-In-Sherlock-Holmes-Outfit.jpg",
                        "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2020/08/goose-battle-royale.jpeg",
                        "https://press-start.com.au/wp-content/uploads/2019/09/Untitled-Goose-GAMe-review-1-770x433.jpg",
                        "https://i0.wp.com/boingboing.net/wp-content/uploads/2020/08/Goose.jpg?fit=1&resize=600%2C4000&ssl=1",
                        "https://i.imgur.com/C0S2n76.gif",
                        "https://i.redd.it/248lf9xq1pk61.gif",
                        "https://preview.redd.it/how-to-drag-object-like-in-untitled-goose-game-v0-74bz7h9qxdxa1.gif?width=657&auto=webp&s=ab2fc2043c00512d2492126ddaf48bf31dfe427b",
                        "https://www.peta.org/wp-content/uploads/2019/10/goose_gif-12-thumb_hammer.gif",
                        "https://64.media.tumblr.com/682264772d7d87f835c2d4f7e7842290/d7f4b4cbe782c8e1-ea/s640x960/5f409858358540d792d9010573f02334a65fbdd2.gif",
                        "https://media.tenor.com/Z3Gx79333tkAAAAC/goose-game-goose.gif",
                        "https://i1.wp.com/bddf794624247cea6a0b-b4761d2ba0154d0278c36dbf2b3c114d.ssl.cf1.rackcdn.com/gif011535226733584.gif?w=720&ssl=1",
                        "https://cdn.vox-cdn.com/uploads/chorus_asset/file/19238907/goose_gif_09_clean_shock.gif",
                        "https://64.media.tumblr.com/254f4e5466868e7510ab4a6b5fd65ca9/2162eea53cd97ac5-09/s1280x1920/ca751ac6505c10079ffe3c60b9d8df4a3e202309.gif",
                        "https://www.bifuteki.com/wp-content/uploads/2018/08/Gif04-Large.gif",
                        "https://cdn.vox-cdn.com/uploads/chorus_asset/file/19238917/goose_gif_01_wimp_bottle.gif",
                        "https://www.kotaku.com.au/wp-content/uploads/2017/10/05/zytcbuzyjaz7rp7mkbrh.gif?quality=75&w=640&h=360&crop=1",
                        "https://www.kakuchopurei.com/wp-content/uploads/2019/12/giphy.gif",
                        "https://64.media.tumblr.com/4c74a8845aa6c31a23c31dd34e88abae/aaf4f733140a74c4-91/s540x810/0d6de44427af112980029eb26e4ec3ffd7af19f5.gif",
                        "https://64.media.tumblr.com/610f41af6d530bad5fa52d035e70c709/6a559c2af7f7db78-41/s540x810/93c9d8b09948e527221f70ed5a117dece7221c1f.gifv",
                        "https://64.media.tumblr.com/fb1635f86886aab4acebbf8a30d37b37/6a559c2af7f7db78-cc/s540x810/a6374c183149d09f81d0d18162db7bd91cf484aa.gifv",
                        "https://cdn.vox-cdn.com/uploads/chorus_asset/file/19238936/goose_gif_02_well_honk.gif",
                        "https://steamuserimages-a.akamaihd.net/ugc/1666860163535634117/DC4A471251EEF3B8632ECE9E39BCC31194859E97/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
                        "https://s.yimg.com/ny/api/res/1.2/xhXrolqMKEoqLgO_KgeX5Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2MA--/https://media.zenfs.com/en/techradar_949/86c3fd615c2bc73509e360acf467deec",
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX1gYcXlfg7ZjJ1FLzP-C4MIsr5NXbZWJUZvxCZF9cb8UCcTm_sJwVU7b8m430UpzLH8Y&usqp=CAU",
                        "https://64.media.tumblr.com/0a09f19a8055eed49b6b5cabaafc2e6b/48afe88d3a5f6b27-76/s640x960/9b02815b74dd8c71ed16c6e5bbae6417250492c5.gifv",
                        "https://i.imgflip.com/50wf0p.gif",
                        "https://i.redd.it/2d7qkxkqdkc91.gif",
                        "https://cdn.dribbble.com/users/568868/screenshots/15452615/media/720f2651bb11c0e02c092cf56310b0bc.gif",
                        "https://i.pinimg.com/originals/d1/f1/e5/d1f1e5e02fb086be13d4074176b5499d.gif",
                        "https://i.makeagif.com/media/9-30-2019/dGK0jh.gif",
                        "https://miro.medium.com/v2/resize:fit:1400/1*LKBTInynDNhExI83ceAc4w.gif"
];

// ---------- TEST ----------

alert("QUACK");

// ---------- REPLACE SCH CREST -----------

const newSchImage = "https://media.tenor.com/NE4pLTL4KusAAAAC/goose-honking-goose.gif";
var simple = document.querySelector("d2l-navigation-link-image");
var simpler = simple.shadowRoot;
var simplest = simpler.querySelector(".d2l-navigation-link-image-container");
var schImage = simplest.querySelector("img");
schImage.src = newSchImage;

var schName = document.createElement("div");
schName.innerHTML = "Singapore Goose<br>University";
schName.style.marginLeft = "15px";
simplest.append(schName);

// ---------- REPLACE COURSE IMAGES ----------

var root1 = document.querySelector(".d2l-widget.d2l-tile d2l-my-courses");
var root2 = root1.shadowRoot;
var root3 = root2.querySelector("d2l-my-courses-container");
var root4 = root3.shadowRoot;
var root5 = root4.querySelector("d2l-tabs d2l-my-courses-content");
var root6 = root5.shadowRoot;
var root7 = root6.querySelector("d2l-my-courses-card-grid");
var root8 = root7.shadowRoot;
var root9 = root8.querySelectorAll("d2l-enrollment-card");

root9.forEach(function (enrollmentCard) {

    var seed = Math.floor(Math.random() * gooseLinkArray.length);
    var targetURL = gooseLinkArray[seed];
    gooseLinkArray.splice(seed,1);

    var root10 = enrollmentCard.shadowRoot;
    var root11 = root10.querySelector("d2l-organization-image");
    var root12 = root11.shadowRoot;
    var root13 = root12.querySelector("d2l-course-image");
    var root14 = root13.shadowRoot;
    var desiredImage = root14.querySelector("img");
    desiredImage.src = targetURL;
    desiredImage.srcset = `${targetURL} 1080w`;

});

/*
var root10 = root9.shadowRoot;
var root11 = root10.querySelector("d2l-organization-image");
var root12 = root11.shadowRoot;
var root13 = root12.querySelector("d2l-course-image");
var root14 = root13.shadowRoot;
var desiredImage = root14.querySelector("img");
alert(desiredImage);
desiredImage.src = newImageUrlSrc;
desiredImage.srcset = newImageUrlSrcSet;
*/
/*
document.addEventListener('DOMContentLoaded', function() {
    var mainBody = document.querySelector(".homepage-col-8"); // call root class
    alert(mainBody);
});
*/
