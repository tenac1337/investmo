// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );

function setSectionHeight(){
	console.log("running");
                //$('#aboutUs').height($(window).height()-100);
                $('#aboutUs').css('min-height',$(window).height());
            }
            setSectionHeight();

//Click event for each sticky nav element
            $('#navbar ul li').each(function(i,element){
                //console.log(element);
                $(this).find('a').click(function (e) {
                    e.preventDefault();   
                        $('html, body').animate({
                            scrollTop: $("#"+$(this).parent().data('nav')).offset().top - 96
                        }, 1000);
               });
            });



});

            
