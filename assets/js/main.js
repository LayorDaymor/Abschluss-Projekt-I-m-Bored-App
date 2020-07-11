(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
      this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 54,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#mainNav",
    offset: 56,
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $(".portfolio-modal").on("show.bs.modal", function (e) {
    $(".navbar").addClass("d-none");
  });
  $(".portfolio-modal").on("hidden.bs.modal", function (e) {
    $(".navbar").removeClass("d-none");
  });
})(jQuery); // End of use strict

$(document).ready(function () {
  var typed = $(".typed");
  $(function () {
    var strings = $(".typed-items").text();
    strings = $(".typed-items").data("typed-person") + "," + strings;
    strings = strings.split(",");

    typed.typed({
      strings: strings,
      typeSpeed: 150,
      loop: true,
    });
  });
});
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".back-to-top").fadeIn("slow");
  } else {
    $(".back-to-top").fadeOut("slow");
  }
});

$(".back-to-top").click(function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    1500,
    "easeInOutExpo"
  );
  return false;
});
////////////////////////////////////
//AppJs
////////////////////////////////////
/*  to scorolling to app-activities Section */
$(".appStart-btn").click(function () {
  $("#app-activities").css("display", "block");
  var audio = $("#appTruck")[0];
  audio.play();
  $("html, body").animate(
    {
      scrollTop: $("#app-activities").offset().top - 54,
    },
    1000,
    "easeInOutExpo"
  );
});

/* to scorolling from random-activities to suggestion-section-for-random-activities Section  */
$("#random-activities").click(function () {
  $("#game-participants").css("display", "none");
  $("#suggestion-result").css("display", "none");
  $("#game-intro").css("display", "none");
  $("#suggestion-section-for-TypsMode").css("display", "none");
  $("#suggestion-section").css("display", "none");
  $("#suggestion-section-for-random-activities").css("display", "block");
  $("html, body").animate(
    {
      scrollTop:
        $("#suggestion-section-for-random-activities").offset().top - 54,
    },
    1000,
    "easeInOutExpo"
  );
});
/*  to scorolling to game-intro Section */
$("#for-mode").click(function () {
  $("#suggestion-result").css("display", "none");
  $("#game-participants").css("display", "none");
  $("#suggestion-section-for-random-activities").css("display", "none");
  $("#game-intro").css("display", "block");
  $("html, body").animate(
    {
      scrollTop: $("#game-intro").offset().top - 54,
    },
    1000,
    "easeInOutExpo"
  );
});

/* to scorolling to suggestion-section-for-TypsMode from game-intro Section  */
$("#game-intro").click(function () {
  $("#suggestion-section-for-random-activities").css("display", "none");
  $("#suggestion-section-for-TypsMode").css("display", "block");
  $("html, body").animate(
    {
      scrollTop: $("#suggestion-section-for-TypsMode").offset().top - 54,
    },
    1000,
    "easeInOutExpo"
  );
});
/* to scorolling game-participants Section */
$("#for-friends").click(function () {
  $("#suggestion-result").css("display", "none");
  $("#suggestion-section-for-TypsMode").css("display", "none");
  $("#suggestion-section-for-random-activities").css("display", "none");
  $("#game-intro").css("display", "none");
  $("#game-participants").css("display", "block");
  $("html, body").animate(
    {
      scrollTop: $("#game-participants").offset().top - 54,
    },
    1000,
    "easeInOutExpo"
  );
});
/* to scorolling to suggestion section from game-participants Section  */
$(".participantsNumber").click(function () {
  $("#suggestion-result").css("display", "none");
  $("#game-intro").css("display", "none");
  $("#suggestion-section-for-random-activities").css("display", "none");
  $("#suggestion-section").css("display", "block");
  $("html, body").animate(
    {
      scrollTop: $("#suggestion-section").offset().top - 54,
    },
    1000,
    "easeInOutExpo"
  );
});

/* for saving the choised Options and feth the Api  */
let choisedOption = [];
const suggestionSectionTyp = document.querySelector(
  "#suggestion-section-for-TypsMode"
);
const appTyps = (type) => {
  choisedOption[1] = type;
  let url = `http://www.boredapi.com/api/activity?type=${type}`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let activity = data.activity;
      const markup = `
    <section id="suggestion-result">
    <h1
    class="col-sm-12 component-header--title text-center display-4"
    data-aos="fade-right"
    data-aos-duration="0"
    data-aos-delay="100"
    style="font-family: Catamaran, sans-serif;font-weight:900;"
  >
   What about that ? 
    <br />
  </h1>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 order-lg-1">
          <div data-aos="fade-right" data-aos-delay="450" class="p-5">
            <img
              class="img-fluid"
              src="assets/img/typs/${type}.png"
            />
          </div>
        </div>
        <div class="col-lg-6 order-lg-2">
          <div>
            <h2 data-aos="fade-left" data-aos-delay="300" class="display-4 Typ-activity-place"style="font-family: Catamaran, sans-serif;font-weight:900;">
            ${activity}
            </h2>
            <div data-aos="fade-left" data-aos-delay="380">
            <p class="h3"style="font-family: Catamaran, sans-serif;font-weight:400;">Do you Like this suggestion? </p>
            </div>
            <div data-aos="fade-left" data-aos-delay="450">
            <button class="btn btn--doar"style="font-family: Catamaran, sans-serif;font-weight:900;" onclick="sugLiked()">Yeh i like it !</button>
            </div>
            <div data-aos="fade-left" data-aos-delay="600">
            <button class="btn btn--doar2"style="font-family: Catamaran, sans-serif;font-weight:900;"onclick="sugNotLiked()">Nah not realy !</button>
            </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  </section>`;
      suggestionSectionTyp.innerHTML = markup;
    });
};

const typActivityPlace=document.querySelector(".btn--doar");
const sugNotLiked=()=>{
  suggestionSectionTyp.innerHTML=""
  let urlforTyps = `http://www.boredapi.com/api/activity?type=${choisedOption[1]}`;
  fetch(urlforTyps)
.then((response) => response.json())
.then((data) => {
  let activity = data.activity;
  const markup = `
<section id="suggestion-result">
<h1
class="col-sm-12 component-header--title text-center display-4"
data-aos="fade-right"
data-aos-duration="0"
data-aos-delay="100"
style="font-family: Catamaran, sans-serif;font-weight:900;"
>
What about that ? 
<br />
</h1>
<div class="container">
  <div class="row align-items-center">
    <div class="col-lg-6 order-lg-1">
      <div data-aos="fade-right" data-aos-delay="450" class="p-5">
        <img
          class="img-fluid"
          src="assets/img/typs/${choisedOption[1]}.png"
        />
      </div>
    </div>
    <div class="col-lg-6 order-lg-2">
      <div>
        <h2 data-aos="fade-left" data-aos-delay="300" class="display-4"style="font-family: Catamaran, sans-serif;font-weight:900;">
        ${activity}
        </h2>
        <div data-aos="fade-left" data-aos-delay="380">
        <p class="h3"style="font-family: Catamaran, sans-serif;font-weight:400;">Do you Like this suggestion? </p>
        </div>
        <div data-aos="fade-left" data-aos-delay="450">
        <button class="btn btn--doar"style="font-family: Catamaran, sans-serif;font-weight:900;" onclick="sugLiked()">Yeh i like it !</button>
        </div>
        <div data-aos="fade-left" data-aos-delay="600">
        <button class="btn btn--doar2"style="font-family: Catamaran, sans-serif;font-weight:900;"onclick="sugNotLiked()">Nah not realy !</button>
        </div>
        </div>
        </div>
    </div>
  </div>
</div>
</section>`;
  suggestionSectionTyp.innerHTML = markup;
});
}















const participantsNumber = (nr) => {
  choisedOption[0] = nr;
};
