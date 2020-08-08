/* Add any JavaScript you need to this file. */
window.onload = function () {
  const toggleButton = document.getElementsByClassName('toggle-button')[0];
  const navbarLinks = document.getElementsByClassName('navbar-links')[0];

  toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
  });

  toggleButton.addEventListener('touchstart', () => {
    navbarLinks.classList.toggle('active');
  });



  var store_images = document.getElementsByClassName('store_image');
  for (var i = 0; i < store_images.length; i++) {
    var store_image = store_images[i];
    store_image.addEventListener('click', showImage);
  }


  function showImage() {
    window.open(this.src);
    var myWindow = window.open('', 'MsgWindow', 'width=400,height=500');
    //myWindow.document.write("<p>Product Desc</p>");
    myWindow.document.write(
      "<table><tr><td width='60%'><img src='" +
      this.src +
      "' width=240,height=800/></td><td valign='top'><strong>Size:</strong> " +
      this.getAttribute('data-size') +
      '<br><strong>Price</strong>: ' +
      this.getAttribute('data-price') +
      '<br><strong>Description:</strong> <br>' +
      this.getAttribute('data-desc') +
      '</td></tr></table>'
    );
  }

  //document.querySelector('.store_image').addEventListener('touchstart', showImage());


};


