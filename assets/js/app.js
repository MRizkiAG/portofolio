//Umur
let dateNow = new Date().getDate();
let monthNow = new Date().getMonth();
let yearNow = new Date().getFullYear();
// let dateNow = 27;
// let monthNow = 10;
// let yearNow = 2021;
let dateBirthday = 27;
let monthBirthday = 10;
let yearBirthday = 2002;
if (dateNow < dateBirthday && monthNow <= monthBirthday)
  age = yearNow - yearBirthday - 1;  
else if (dateNow >= dateBirthday && monthNow < monthBirthday)
  age = yearNow - yearBirthday - 1;  
else
  age = yearNow - yearBirthday;
$(".age").text(age);

$(document).ready(function() {
  
  //Inisiasi Animate On Scroll
  AOS.init();


  //JS Skill
  let skillImageName = ["css", "js", "bs4", "php", "sass", "jquery"];
  let skillText = ["CSS", "Javascript", "Bootstrap", "PHP", "SASS", "JQuery"];
  //Mereverse urutan data array
  skillImageName.reverse();
  skillText.reverse();
  function skill(image, text) {
    $(".main-skill").after("<div data-aos=\"zoom-in\" data-aos-duration=\"1000\" class=\"skill d-flex justify-content-center\"><div class=\"wrap-img d-flex justify-content-center imghvr-blur\"><img src=\"assets/img/" + image + ".png\" alt=\"\"><p class=\"d-flex align-self-center text-center\">"+ text +"</p></div></div>");
  }
  for (i=0;i<skillImageName.length;i++){
    skill(skillImageName[i], skillText[i]);
  }


  //JS Certification
  //TODO
  function certification(){
    $(".main-certification").after("<div class=\"wrap-certificate\"><a href=\"assets/img/certification/Sertifikat DTS - Online Academy - HTML, CSS, Javascript MRizkiAG-1.jpg\" data-lightbox=\"roadtrip\" data-title=\"Digital Talent Scholarship Certificate - Online Academy - HTML, CSS, Javascript - 1\" class=\"d-flex justify-content-center\"> <div class=\"img-certification imghvr-zoom-out-down d-flex justify-content-center\"><img src=\"assets/img/certification/Sertifikat DTS - Online Academy - HTML, CSS, Javascript MRizkiAG-1.jpg\" alt=\"Sertifikat DTS - Online Academy - HTML, CSS, Javascript\"><p class=\"d-flex align-self-center text-center\">Digital Talent Scholarship Certificate <br> Online Academy<br>HTML, CSS, Javascript</p></div></a><a href=\"assets/img/certification/Sertifikat DTS - Online Academy - HTML, CSS, Javascript MRizkiAG-2.jpg\" data-lightbox=\"roadtrip\" data-title=\"Digital Talent Scholarship Certificate - Online Academy - HTML, CSS, Javascript - 2\" class=\"hide\"></a></div>");
  }
  


  //Hide a LightBox
  $("a.hide").hide();

  // $('.slick-responsive').slick({
  //     dots: true, 
  //     infinite: true,
  //     speed: 300,
  //     slidesToShow: 4,
  //     slidesToScroll: 4,
  //     responsive: [

  //       {
  //         breakpoint: 768,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 2
  //         }
  //       },
  //       {
  //         breakpoint: 576,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1
  //         }
  //       }
  //       // You can unslick at a given breakpoint now by adding:
  //       // settings: "unslick"
  //       // instead of a settings object
  //     ]
  // });

  $('.slick-center').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '5px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 1
          }
        }
      ]
  });
  
  $('.single-item').slick({
    dots: true, 
    infinite: true,
    speed: 300
  });
}); 

