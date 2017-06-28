(function() {
      document.getElementsByClassName('top-wrapper__tools__search')[0].addEventListener('click',function() {
          document.getElementsByClassName('search-form')[0].classList.toggle('open');
        document.getElementsByClassName('search-input')[0].classList.toggle('open');
      });
})();


$(document).ready(function() {


  var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

var d = new Date();

   
 var moment = $('#month').text();
 var text = moment.match('[a-zA-Z]+');



        for(var k=0;k<=monthNames.length;k++) {
          if (text[0].indexOf(monthNames[k]) == 0)
          {
            $(".prev-month-text").text(monthNames[k-1]);
            $(".next-month-text").text(monthNames[k+1]);
          }
        }


      $('.switch-month').on('click',function() {
        moment = $('#month').text();
        text = moment.match('[a-zA-Z]+');
        for(var k=0;k<=monthNames.length;k++) {
          if (text[0].indexOf(monthNames[k]) == 0)
          {
            if(text[0] === "December") {
              $(".next-month-text").text(monthNames[0]);
            } 
            if(text[0] === "January") {
              $(".prev-month-text").text(monthNames[11]);
              $(".next-month-text").text(monthNames[1]);
            }
            else {
              $(".prev-month-text").text(monthNames[k-1]);
              $(".next-month-text").text(monthNames[k+1]);
            }
          }
        }
      });

      $('.tablinks').click(function() {        
          openCity(event,$(this).text());
      });

      
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

 var n = {
        origin: "bottom",
        viewFactor: .15,
        duration: 800,
        distance: "20px",
        scale: .8,
        reset: !0
    };
    
window.sr = new ScrollReveal(n), sr.reveal("#header"), sr.reveal(".socials__box"), sr.reveal(".follow__box"), sr.reveal(".sign-in__box"), sr.reveal(".join-newsletter__box"), sr.reveal(".banner-slider"), sr.reveal(".socials__box"), sr.reveal(".video-wrapper"), sr.reveal(".stats-likes-shares__box"), sr.reveal(".last-tweets__box"), sr.reveal(".hot-news__box"), sr.reveal(".contact-form__box"), sr.reveal(".insta-row"), sr.reveal(".calendar"), sr.reveal(".view-stories__box"), sr.reveal(".article-box"), sr.reveal(".quotes-box"), sr.reveal(".tabs__box"), sr.reveal(".side-bar__menu__wrapper");

  $('.blog-submenu').click(function() {
    $('.content__menu-right').toggleClass('smaller__box');
    $('.side-bar__submenu__wrapper').toggleClass('active');
  })
  $('.hamburger').click(function() {
    $('.main-nav').toggleClass('disable');
  });
  $('.side-bar__nav__list li').click(function() {
    $('.side-bar__nav__list li .icon-right-open').toggleClass('active');
  });
  $('.youtube-video__container iframe').css('position','relative');
});