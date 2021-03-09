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

