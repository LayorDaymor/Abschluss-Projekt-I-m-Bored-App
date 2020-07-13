(function ($) {
  "use strict";
  /*   Smooth scrolling using jQuery easing */
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
  //////////////////////////////////////////////////////////////////////////////

  /* Closes responsive menu when a scroll trigger link is clicked */
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });
  //////////////////////////////////////////////////////////////////////////////

  /* Activate scrollspy to add active class to navbar items on scroll */
  $("body").scrollspy({
    target: "#mainNav",
    offset: 56,
  });
  //////////////////////////////////////////////////////////////////////////////

  /* Collapse Navbar */
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  /* Collapse now if page is not at top */
  navbarCollapse();
  //////////////////////////////////////////////////////////////////////////////

  /* Collapse the navbar when page is scrolled */
  $(window).scroll(navbarCollapse);
  /* Hide navbar when modals trigger */
  $(".portfolio-modal").on("show.bs.modal", function (e) {
    $(".navbar").addClass("d-none");
  });
  $(".portfolio-modal").on("hidden.bs.modal", function (e) {
    $(".navbar").removeClass("d-none");
  });
})(jQuery);
//////////////////////////////////////////////////////////////////////////////

/* type sittings on the Header */
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
//////////////////////////////////////////////////////////////////////////////

/* back to top icon Sittings */
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
//////////////////////////////////////////////////////////////////////////////

//AppJs
//////////////////////////////////////////////////////////////////////////////

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
//////////////////////////////////////////////////////////////////////////////

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
//////////////////////////////////////////////////////////////////////////////

/*  to scorolling to game-intro Section */
$("#for-mode").click(function () {
  $("#suggestion-result").css("display", "none");
  $("#game-participants").css("display", "none");
  $("#suggestion-section").css("display", "none");
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
//////////////////////////////////////////////////////////////////////////////

/* to scorolling to suggestion-section-for-TypsMode from game-intro Section  */
$("#game-intro").click(function () {
  $("#suggestion-section-for-random-activities").css("display", "none");
  $("#result-section-for-TypsMode").css("display", "none");
  $("#result-section-for-participants").css("display", "none");
  $("#result-section-for-random").css("display", "none");
  $("#suggestion-section-for-TypsMode").css("display", "block");
  $("html, body").animate(
    {
      scrollTop: $("#suggestion-section-for-TypsMode").offset().top - 54,
    },
    1000,
    "easeInOutExpo"
  );
});
//////////////////////////////////////////////////////////////////////////////

/* to scorolling to game-participants Section */
$("#for-friends").click(function () {
  $("#suggestion-result").css("display", "none");
  $("#suggestion-section-for-TypsMode").css("display", "none");
  $("#suggestion-section-for-random-activities").css("display", "none");
  $("#game-intro").css("display", "none");
  $("#result-section-for-TypsMode").css("display", "none");
  $("#result-section-for-participants").css("display", "none");
  $("#result-section-for-random").css("display", "none");
  $("#game-participants").css("display", "block");
  $("html, body").animate(
    {
      scrollTop: $("#game-participants").offset().top - 54,
    },
    1000,
    "easeInOutExpo"
  );
});
//////////////////////////////////////////////////////////////////////////////

/* to scorolling to suggestion section from game-participants Section  */
$(".participantsNumber").click(function () {
  $("#suggestion-result").css("display", "none");
  $("#game-intro").css("display", "none");
  $("#suggestion-section-for-random-activities").css("display", "none");
  $("#result-section-for-TypsMode").css("display", "none");
  $("#result-section-for-participants").css("display", "none");
  $("#result-section-for-random").css("display", "none");
  $("#suggestion-section").css("display", "block");
  $("html, body").animate(
    {
      scrollTop: $("#suggestion-section").offset().top - 54,
    },
    1000,
    "easeInOutExpo"
  );
});
//////////////////////////////////////////////////////////////////////////////

/* for saving the choised Options and feth the Api (Datanbank) */
let choisedOption = [];
let choisedApi = [];
let coisedActivity = [];
let ytVedios = [];
let youTubeDataOut = [];
//////////////////////////////////////////////////////////////////////////////

const appStyls = document.querySelector("#app-activities");
const appOptionsTyp = document.querySelector("#game-intro");
const appOptionsParticipants = document.querySelector("#game-participants");
const suggestionSectionTyp = document.querySelector(
  "#suggestion-section-for-TypsMode"
);
const suggestionSectionParticipants = document.querySelector(
  "#suggestion-section"
);
const suggestionSectionRendom = document.querySelector(
  "#suggestion-section-for-random-activities"
);
const resultSectionTyp = document.querySelector("#result-section-for-TypsMode");
const resultSectionParticipants = document.querySelector(
  "#result-section-for-participants"
);
const resultSectionRendom = document.querySelector(
  "#result-section-for-random"
);
const footer = document.querySelector("footer");
/* BoredApi Class for API Information and Output */
class BoredApi {
  constructor(activity, type, participants) {
    this.activity = activity;
    this.type = type;
    this.participants = participants;
  }

  Output() {
    return `
  <div id="suggestion-result1">
  <h1
  class="col-sm-12 component-header--title text-center display-4"
  data-aos="fade-right"
  data-aos-duration="0"
  data-aos-delay="100"
  style="font-family: Catamaran, sans-serif;font-weight:900;"
>
 What about .. 
  <br />
</h1>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-6 order-lg-1">
        <div data-aos="fade-right" data-aos-delay="450">
          <img
            class="img-fluid"
            src="assets/img/typs/${this.type}.png"
          />
        </div>
      </div>
      <div class="col-lg-6 order-lg-2">
        <div>
        <div data-aos="fade-left" data-aos-delay="600">
        <p class="h2 p-0 m-0"style="font-family: Catamaran, sans-serif;font-weight:700;text-transform: capitalize;">${this.type}</p>
        <p data-aos="fade-left" data-aos-delay="700" class="h2 p-0 m-0"style="font-family: Catamaran, sans-serif;font-weight:700;text-transform: capitalize;">  participants: ${this.participants}</p>

      
        </div>
          <h2 data-aos="fade-left" data-aos-delay="300" class="display-4 Typ-activity-place"style="font-family: Catamaran, sans-serif;font-weight:900;">
          ${this.activity}
          </h2>
          <div data-aos="fade-left" data-aos-delay="380">
          <p class="h3"style="font-family: Catamaran, sans-serif;font-weight:400;">Do you Like this suggestion? </p>
          </div>
          <div >
          <button data-aos="fade-left" data-aos-delay="400" class="btn btn--doar"style="font-family: Catamaran, sans-serif;font-weight:900;"id="toResult" onclick="sugLiked()">Yeh i like it !</button>
          <button  data-aos="fade-left" data-aos-delay="600" class="btn btn--doar2"style="font-family: Catamaran, sans-serif;font-weight:900;"onclick="sugNotLiked()">Nah not realy !</button>   
          <button  data-aos="fade-left" data-aos-delay="800" class="btn btn--doar3"style="font-family: Catamaran, sans-serif;font-weight:900;"onclick="anotherChois()">Another Choise !</button>   

          </div>

          <div data-aos="fade-left" data-aos-delay="600">
          
          </div>
          </div>
          </div>
      </div>
    </div>
  </div>
</div>`;
  }
}
//////////////////////////////////////////////////////////////////////////////

/* Fetch appTyps Api */
const appTyps = (type) => {
  let url = `https://www.boredapi.com/api/activity?type=${type}`;
  choisedOption[1] = type;
  choisedApi[0] = url;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      coisedActivity[0] = data.activity;
      choisedOption[0] = data.participants;
      let apiInformation = new BoredApi(
        data.activity,
        data.type,
        data.participants
      );
      suggestionSectionTyp.innerHTML = apiInformation.Output();
    });
};
//////////////////////////////////////////////////////////////////////////////

/* Fetch participant Api */
const participantsNumber = (nr) => {
  let url = `https://www.boredapi.com/api/activity?participants=${nr}`;
  choisedOption[0] = nr;
  choisedApi[0] = url;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      coisedActivity[0] = data.activity;
      let apiInformation = new BoredApi(
        data.activity,
        data.type,
        data.participants
      );
      suggestionSectionParticipants.innerHTML = apiInformation.Output();
    });
};
//////////////////////////////////////////////////////////////////////////////

/*  Fetch Rendom Api */
const rendomActivityes = () => {
  let url = `https://www.boredapi.com/api/activity/`;
  choisedApi[0] = url;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      coisedActivity[0] = data.activity;
      choisedOption[0] = data.participants;
      let apiInformation = new BoredApi(
        data.activity,
        data.type,
        data.participants
      );
      suggestionSectionRendom.innerHTML = apiInformation.Output();
    });
};
//////////////////////////////////////////////////////////////////////////////

/* uploed another Suggestion button */
const sugNotLiked = () => {
  suggestionSectionTyp.innerHTML = "";
  resultSectionTyp.style.display = "none";
  resultSectionParticipants.style.display = "none";
  fetch(choisedApi)
    .then((response) => response.json())
    .then((data) => {
      coisedActivity[0] = data.activity;
      let apiInformation = new BoredApi(
        data.activity,
        data.type,
        data.participants
      );
      if (suggestionSectionTyp.style.display == "block") {
        suggestionSectionTyp.innerHTML = apiInformation.Output();
      } else if (suggestionSectionParticipants.style.display == "block") {
        suggestionSectionParticipants.innerHTML = apiInformation.Output();
      } else {
        suggestionSectionRendom.innerHTML = apiInformation.Output();
      }
    });
};
//////////////////////////////////////////////////////////////////////////////

/* anotherChois button */
const anotherChois = () => {
  if (suggestionSectionTyp.style.display == "block") {
    appOptionsTyp.scrollIntoView({ block: "start", behavior: "smooth" });
  } else if (suggestionSectionParticipants.style.display == "block") {
    appOptionsParticipants.scrollIntoView({ block: "end", behavior: "smooth" });
  } else {
    appStyls.scrollIntoView({ block: "start", behavior: "smooth" });
  }
};
//////////////////////////////////////////////////////////////////////////////

/* fetch Youtube Api from the sugLiked button */
const sugLiked = () => {
  resultSectionTyp.style.display = "none";
  resultSectionParticipants.style.display = "none";
  resultSectionRendom.style.display = "none";
  ytVedios = new Array();
  let ytApiKey = "AIzaSyCSdVLCrnq2MW_FN044GCQVNvThw8pJSE4";
  let ytUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${ytApiKey}&type=video&q=${coisedActivity[0]}`;
  fetch(ytUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.items.forEach((item) => {
        ytVedios.push(item.id.videoId);
      });
      const ytVediosRandom = Math.floor(Math.random() * 5);
      const ytVediosRandomOutput = ytVedios[ytVediosRandom];
      youTubeDataOut[0] = `<div id="last-result1">
      <h1
      class="col-sm-12 component-header--title text-center display-4"
      data-aos="fade-right"
      data-aos-duration="0"
      data-aos-delay="100"
      style="font-family: Catamaran, sans-serif;font-weight:900;"
    >
     Here some YouTube vedio for: 
      <br />
    </h1>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 order-lg-1">
            <div data-aos="fade-right" data-aos-delay="450" id="vedioPlace">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/${ytVediosRandomOutput}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
          <div class="col-lg-6 order-lg-2">
            <div>
            <div data-aos="fade-left" data-aos-delay="600">
            <p class="h2 p-0 m-0"style="font-family: Catamaran, sans-serif;font-weight:700;text-transform: capitalize;">${choisedOption[1]}</p>
            <p data-aos="fade-left" data-aos-delay="700" class="h2 p-0 m-0"style="font-family: Catamaran, sans-serif;font-weight:700;text-transform: capitalize;">  participants: ${choisedOption[0]}</p>
    
          
            </div>
              <h2 data-aos="fade-left" data-aos-delay="300" class="display-4 Typ-activity-place"style="font-family: Catamaran, sans-serif;font-weight:900;">
              ${coisedActivity}
              </h2>
              <div data-aos="fade-left" data-aos-delay="380">
              <p class="h3"style="font-family: Catamaran, sans-serif;font-weight:400;">Is this video helpful?</p>
              <button data-aos="fade-left" data-aos-delay="400" class="btn btn--doar4"style="font-family: Catamaran, sans-serif;font-weight:900;"onclick="scrollingToFooter()">Yeh sure!</button>
              <button data-aos="fade-left" data-aos-delay="600" class="btn btn--doar5"style="font-family: Catamaran, sans-serif;font-weight:900;"onclick="vedioNotLiked()">Nuh not realy!</button>

              </div>
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>`;

      if (suggestionSectionTyp.style.display == "block") {
        resultSectionTyp.style.display = "block";
        resultSectionTyp.innerHTML = youTubeDataOut[0];
        resultSectionTyp.scrollIntoView({ block: "start", behavior: "smooth" });
      } else if (suggestionSectionParticipants.style.display == "block") {
        resultSectionParticipants.style.display = "block";
        resultSectionParticipants.innerHTML = youTubeDataOut[0];
        resultSectionParticipants.scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
      } else {
        resultSectionRendom.style.display = "block";
        resultSectionRendom.innerHTML = youTubeDataOut[0];
        resultSectionRendom.scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
      }
    });
};
//////////////////////////////////////////////////////////////////////////////

/* for changing the Vedio if the User did not find the Vedio helpful */
const vedioNotLiked = () => {
  sugLiked();
  if (resultSectionTyp.style.display == "block") {
    resultSectionTyp.innerHTML = youTubeDataOut[0];
  } else if (resultSectionParticipants.style.display == "block") {
    resultSectionParticipants.innerHTML = youTubeDataOut[0];
  } else {
    resultSectionRendom.innerHTML = youTubeDataOut[0];
  }
  console.log(choisedOption);
};
//////////////////////////////////////////////////////////////////////////////


/*  scrollingToFooter*/
const scrollingToFooter = () => {
  footer.style.display = "block";
  footer.innerHTML = `<section>
<div class="container">
    <div class="row align-items-center">
        <div class="col-lg-6 order-lg-2">
            <div><img class="footerLogo img-fluid" data-aos="fade-left"data-aos-once="true" data-aos-delay="200" src="assets/img/footerLogo.png"></div>
        </div>
        <div class="col-lg-6 order-lg-1">
            <div class="p-5">
                <div class="d-lg-flex align-items-lg-center">
                    <h3 data-aos="fade-right" data-aos-once="true"class="display-4" style="margin: 0px;font-family: Catamaran, sans-serif;font-weight: 800;">Made with</h3><i class="fa fa-heart pulse animated infinite" style="font-size: 61px;margin: 0;margin-top: -7px;margin-left: 11px;color: #dc143c;"></i></div>
                <p data-aos="fade-right" data-aos-delay="200"data-aos-once="true" style="font-family: Catamaran, sans-serif;font-size: 19px;margin-right: 0px;margin-top: 11px;margin-bottom: 0;">Created by Ahmad Karbouj as&nbsp; Final project for&nbsp;<br>Junior Full-Stack Web-Developer<br><br></p>
                <a href="https://github.com/LayorDaymor"target="blank"class="socialMedia"><i class="fa fa-github" data-aos="fade-right" data-aos-delay="400"data-aos-once="true" style="font-size: 64px;margin-left: 0px;margin-right: 10px;"></i></a>
                <a href="https://www.instagram.com/ahmad_karbouj/?hl=de"target="blank"class="socialMedia"><i class="fa fa-instagram" data-aos="fade-up" data-aos-delay="550"data-aos-once="true" style="font-size: 64px;margin-right: 10px;"></i></a>
                <a href="https://de-de.facebook.com/Layor.Daymor"target="blank"class="socialMedia"> <i class="fa fa-facebook-square"  data-aos="fade-left" data-aos-delay="600"data-aos-once="true" style="font-size: 64px;margin-right: 10px;"></i></a>
        </div>
    </div>
</div>
</section>`;
  footer.scrollIntoView({ block: "start", behavior: "smooth" });
};
//////////////////////////////////////////////////////////////////////////////

/* end of Scripts :))  */
