function toggleTheme() {
  $("#btn").click(() => {
    $(".aboutContainer").toggleClass("darkCard");
    $("body").toggleClass("darkBody");
    $(".portfolioSecondPart").toggleClass("darkPortfolio");
    $(".footerBox").toggleClass("darkFooter");
    $(".navContainer").toggleClass("darkNav");
    $(".navLinks").toggleClass("darkNavBtn");
    $(".listContainer").toggleClass("darkList");
  });
}

toggleTheme();
