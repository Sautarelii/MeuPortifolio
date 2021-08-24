$('nav a').click(function(e){
e.preventDefault();
var id =$(this).attr('href');
targetOffset = $(id).Offset().top;

$('html,body').animate({
    scrollTop: targetOffset
},500);

});