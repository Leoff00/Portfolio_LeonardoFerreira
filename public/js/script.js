function imgEffect() {
  const pictures = document.querySelectorAll(".projPics");

  $(pictures).click((event) => {
    const currentImg = event.target;
    $(function () {
      $(currentImg).addClass("projPicsAmplied");
    });
  });

  $(pictures).dblclick((event) => {
    const currentImg = event.target;
    $(function () {
      $(currentImg).addClass("projPicsMoreAmplied");
    });
  });

  $(pictures).mouseout((event) => {
    const currentImg = event.target;
    $(function () {
      $(currentImg).removeClass("projPicsMoreAmplied");
    });
  });

  $(pictures).mouseout((event) => {
    const currentImg = event.target;
    $(function () {
      $(currentImg).removeClass("projPicsAmplied");
    });
  });

  /* pictures.forEach((event) => {
      const currentImg = event;

      currentImg.addEventListener("mouseover", () => {
        $(function () {
          $(currentImg)
            .addClass('projPicsAmplied')
        });
      });

      currentImg.addEventListener("mouseout", () => {
          $(function () {
            $(currentImg)
              .removeClass('projPicsAmplied')
          });
        });

    });*/
}

imgEffect();
