$(document).ready(function () {
  $(".navbar .menu li a").click(function () {
    $("html").css("scrollBehavior", "smooth");
  });

  $(".menu-burger").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-burger").toggleClass("deactive");
    $(".menu-x").toggleClass("active");
  });
  $(".menu-x").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-burger").toggleClass("deactive");
    $(".menu-x").toggleClass("active");
  });

  // dark mode functionality
  $(".light-dark-mode").click(function () {
    $("body").toggleClass("active");
    $("main").toggleClass("active");
    $(".navbar").toggleClass("active");
    $(".navbar .logo a").toggleClass("active");
    $(".navbar .logo span").toggleClass("active");
    $(".home").toggleClass("active");
    $(".navbar .menu li a").toggleClass("active");
    $(".navbar .menu li a:hover").toggleClass("active");
    $(".navbar .menu li a::before").toggleClass("active");
    $(".about .title").toggleClass("active");
    $(".about .about-content .right .text").toggleClass("active");
    $(".about .about-content .right p").toggleClass("active");
    $(".about .about-content .right span").toggleClass("active");
    $(".about .about-content .left img").toggleClass("active");
    $(".about .about-content .right").toggleClass("active");
    $(".skills .title").toggleClass("active");
    $(".skills .skills-content .left .text").toggleClass("active");
    $(".skills .skills-content .left p").toggleClass("active");
    $(".skills .skills-content .left").toggleClass("active");
    $(".skills .skills-content .right .bar").toggleClass("active");
    $(".skills .skills-content .right .bar .info .info-name").toggleClass(
      "active"
    );
    $(".skills .skills-content .right .bar .info .info-perct").toggleClass(
      "active"
    );
    $(".projects .title").toggleClass("active");
    $(".projects .card").toggleClass("active");
    $(".projects .card .proj-name").toggleClass("active");
    $(".services .title").toggleClass("active");
    $(".services .services-content .card").toggleClass("active");
    $(".contact .title").toggleClass("active");
    $(".contact .contact-content").toggleClass("active");
    $(".contact .contact-content .column .text").toggleClass("active");
    $(".contact .contact-content .info .head").toggleClass("active");
    $(".contact .contact-content .info .sub-title").toggleClass("active");
    $(".contact .right form .field input").toggleClass("active");
    $(".contact .right form .textarea textarea").toggleClass("active");
    $(".contact .right form .field input:focus").toggleClass("active");
    $(".contact .right form .textarea textarea:focus").toggleClass("active");
    $(".contact .right .button button").toggleClass("active");
    $("footer").toggleClass("active");
    $("footer span a").toggleClass("active");
    $(".contact .right form .textarea textarea.active::placeholde").toggleClass(
      "active"
    );
    $(".contact .right form .field input.active::placeholder").toggleClass(
      "active"
    );
  });
});
