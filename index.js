let pictures = new Array(
    { image: 'images/coffee0.jpg', caption: 'Heart shaped latte art' },
    { image: 'images/coffee1.jpg', caption: 'Coffee tasting events' },
    { image: 'images/coffee2.jpg', caption: 'Espresso machine' },
    { image: 'images/coffee3.jpg', caption: 'Coffee and tea tasting training' },
    { image: 'images/coffee4.jpg', caption: 'Barista with freshly made coffee'},
    { image: 'images/coffee5.jpg', caption: 'Latte art pour'},
    { image: 'images/coffee6.jpg', caption: 'Customers relaxing at our tables'},
    { image: 'images/coffee7.jpg', caption: 'Our brewed coffee with rich cream'},
    { image: 'images/coffee8.jpg', caption: 'Pour Over Coffee Method'},
    { image: 'images/coffee9.jpg', caption: 'Espresso Bar'},
    { image: 'images/coffee11.jpg', caption: 'Lounge area'},
    { image: 'images/coffee12.jpg', caption: 'Freshly brewed coffee'},
    { image: 'images/coffee13.jpg', caption: 'Latte Art'},
    { image: 'images/coffee14.jpg', caption: 'Our favorite customers'},
    { image: 'images/coffee15.jpg', caption: 'Condiment station'},
);

function displayImages() {
    let modal = document.getElementById("myModal");
    let modalImg = document.getElementById("modalImg");
    console.log(modalImg);

    let modalCaption = document.getElementById("modalCaption");
    console.log(modalCaption);

    for (let i = 0; i < pictures.length; i++) {
        let image = pictures[i].image;
        console.log(image);
        let caption = pictures[i].caption;
        console.log(caption);

        const thumbnailsContainer = document.getElementById("thumbnails");
       
        // div and img elements are created onload
        let div = document.createElement('div');
        div.className = "grid-item";
        let img = document.createElement('img');
        img.src = image;
        img.id = image;
        img.name = 'thumbnails';
        img.alt = caption;

        // append the img element inside the div
        div.appendChild(img);

        // append div in the div with the thumbnail container
        thumbnailsContainer.appendChild(div);

        img.onclick = function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
            modalCaption.innerHTML = this.alt;
            // update the currentPicture
            currentPicture = i;
        }

    }

    let span = document.getElementsByClassName('close')[0];
    span.onclick = function() {
        modal.style.display = 'none';
    }
}

// keeps track of the index of the currently shown picture
let currentPicture = 0;

function getPrevImage(e) {
    e.preventDefault();

    if (currentPicture > 0) {
        currentPicture--;
    }

    document.getElementById('modalCaption').innerHTML = pictures[currentPicture].caption;
    document.getElementById("modalImg").src = pictures[currentPicture].image;
}

function getNextImage(e) {
    e.preventDefault();

    if (currentPicture < pictures.length - 1) {
        currentPicture++;
    }

    document.getElementById('modalCaption').innerHTML = pictures[currentPicture].caption;
    document.getElementById("modalImg").src = pictures[currentPicture].image;
}

// navbar function
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
