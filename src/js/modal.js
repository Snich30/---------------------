
var modal = document.getElementById("modal");
var modalImage = modal.querySelector(".modal-image");
var modalAvatar = modal.querySelector(".modal-avatar");
var modalAuthorName = modal.querySelector(".modal-author-name");

var images = document.querySelectorAll(".gelery .img");

images.forEach(function(image) {
  image.addEventListener("click", function() {
    var bg = image.style.getPropertyValue("--bg");
    var avatar = image.querySelector(".avatar").src;
    var authorName = image.querySelector(".author-name").textContent;
  
    modalImage.src = bg;
    modalAvatar.src = avatar;
    modalAuthorName.textContent = authorName;
    
    modal.style.display = "block";
  });
});

var closeButton = modal.querySelector(".close");

closeButton.addEventListener("click", function() {
  modal.style.display = "none";
});