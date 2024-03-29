
import "./style.styl";
import "./blocks/product/product";
import "./jquery.firefly-0.7.min.js";
import "../node_modules/jquery/dist/jquery.js";
import "../node_modules/jquery/dist/jquery.min.js";
import "./jquery.fullPage.min.js";
// import "./blocks/gallery/gallery";
import "./owl.carousel.min.js";



$(function () {

    
    // $.firefly({
    //     color: '#fff',
    //     minPixel: 1,
    //     maxPixel: 4,
    //     total: 60,
    //     on: '#firefly',
    //     borderRadius: 50
    // });
    // $("html,body").animate({scrollTop:0},500);

    $(document).ready(function() {
        if($(window).width() >= 700){
            $('#fullpage').fullpage({
                anchors: ['home','product', 'project', 'block3', 'block4'],
                menu: '#menu',
                css3: true,
                scrollHorizontally: false,
                scrollingSpeed: 1000,
                touchSensitivity: 10
            });
        
        } 

        
        
    });
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            768:{
                items:2,
                nav:true
            },
            950:{
                items:3,
                nav:true,
                loop:true
            }
        }
    })

   
   
// let selectedTd;

// table.onclick = function(event) {
//   let target = event.target; // где был клик?

//   if (target.tagName != 'TD') return; // не на TD? тогда не интересует

//   highlight(target); // подсветить TD
// };

// function highlight(td) {
//   if (selectedTd) { // убрать существующую подсветку, если есть
//     selectedTd.classList.remove('highlight');
//   }
//   selectedTd = td;
//   selectedTd.classList.add('highlight'); // подсветить новый td
// }
    

    $("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "https://solarischair.ru/mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form").trigger("reset");
		});
		return false;
	});
    
    $("#form_2").submit(function() {
		$.ajax({
			type: "POST",
			url: "https://solarischair.ru/mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form_2").trigger("reset");
		});
		return false;
    });
    
    $("#form_3").submit(function() {
		$.ajax({
			type: "POST",
			url: "https://solarischair.ru/mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form_3").trigger("reset");
		});
		return false;
    });


    $("#form_4").submit(function() {
		$.ajax({
			type: "POST",
			url: "https://solarischair.ru/mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form_4").trigger("reset");
		});
		return false;
    });


    $("#form_5").submit(function() {
		$.ajax({
			type: "POST",
			url: "https://solarischair.ru/mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form_5").trigger("reset");
		});
		return false;
    });


    $("#form_6").submit(function() {
		$.ajax({
			type: "POST",
			url: "https://solarischair.ru/mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form_6").trigger("reset");
		});
		return false;
    });


    $("#form_7").submit(function() {
		$.ajax({
			type: "POST",
			url: "https://solarischair.ru/mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form_7").trigger("reset");
		});
		return false;
    });


    $("#form_8").submit(function() {
		$.ajax({
			type: "POST",
			url: "https://solarischair.ru/mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form_8").trigger("reset");
		});
		return false;
    });








    if ( document.body.clientWidth <= 700 ) {
        $(function(){
      
            $('[href="#home"]').on('click', function(block0){
               $('html,body').stop().animate({ scrollTop: $('[data-anchor="block0"]').offset().top }, 1000);
               block0.preventDefault();
            });
            
            });
        $(function(){

            $('[href="#product"]').on('click', function(block1){
              $('html,body').stop().animate({ scrollTop: $('[data-anchor="block1"]').offset().top }, 1000);
              block1.preventDefault();
            });
            
            });
         $(function(){
      
            $('[href="#project"]').on('click', function(block2){
               $('html,body').stop().animate({ scrollTop: $('[data-anchor="block2"]').offset().top }, 1000);
               block2.preventDefault();
            });
            
            });
         
            
    }

   




});


