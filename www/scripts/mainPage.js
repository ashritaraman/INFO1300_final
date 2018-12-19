// When the document is ready
$(document).ready(function() {

    var current = 0
  // When the rooms nav item is clicked
  $("#NavItem").click(function () {
      if(current == 0){
          $("#Dropdown").removeClass("hidden");
          current = 1;
      }else{
          $("#Dropdown").addClass("hidden");
          current = 0;
      }
  });


  // List of images
  var images = [
    "images/path01.jpg", // index 0
    "images/path02.jpg", // index 1
    "images/path03.jpg", // index 2
    "images/path04.jpg", // index 3
  ];

  // The index of the image that is currently displayed
  var currentIndex = 0;

  // When the next button is clicked
  $("#slideshowNext").click(function () {
    // YOUR CODE HERE
    var oldSrc = images[currentIndex];
    if(currentIndex == 3){
        currentIndex = 0;
    }
    else{
        currentIndex = currentIndex + 1;
    }
    var newSrc = images[currentIndex];
    $('img[src="' + oldSrc + '"]').attr('src', newSrc);
    // END OF YOUR CODE
  });
});
