$(document).ready(function () {
  var currentFloor = 2;
  var floorPath = $(".home-image path");
  var counterUp = $(".counter-up");
  var counterDown = $(".counter-down");
  var modal = $(".modal");
  var modalCloseButton = $(".modal-close-button");
  var viewFlatsButton = $(".view-flats");
  var flatsPath = $(".modal-image path");
  var flatsLink = $(".flat-link");

  floorPath.on("mouseover", function () {
    floorPath.removeClass("current-floor");
    currentFloor = $(this).attr("data-floor");
    $(".counter").text(currentFloor);
  });

  floorPath.on("click", toggleModal);
  modalCloseButton.on("click", toggleModal);
  viewFlatsButton.on("click", toggleModal);

  counterUp.on("click", function () {
    if (currentFloor < 18) {
      currentFloor++;
      usNumber();
    }
  });

  counterDown.on("click", function () {
    if (currentFloor > 2) {
      currentFloor--;
      usNumber();
    }
  });

  let usNumber = function () {
    usCurrentFloor = currentFloor.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
    $(".counter").text(usCurrentFloor);
    floorPath.removeClass("current-floor");
    $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
  };

  function toggleModal() {
    modal.toggleClass("is-open");
  }

  function deleteClass() {
    flatsPath.removeClass("current-flat");
    flatsLink.removeClass("current-flat");
  }

  flatsPath.on("mouseover", function () {
    deleteClass();
    $(`[data-flat-link="${$(this).attr("data-flat")}"]`).toggleClass(
      "current-flat"
    );
  });

  flatsLink.on("mouseover", function () {
    deleteClass();
    $(`[data-flat="${$(this).attr("data-flat-link")}"]`).toggleClass(
      "current-flat"
    );
  });
});
