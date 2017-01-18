
$(document).ready(function(){/* off-canvas sidebar toggle */

$('[data-toggle=offcanvas]').click(function() {
  	$(this).toggleClass('visible-xs text-center');
    $(this).find('i').toggleClass('glyphicon-chevron-right glyphicon-chevron-left');
    $('.row-offcanvas').toggleClass('active');
    $('#lg-menu').toggleClass('hidden-xs').toggleClass('visible-xs');
    $('#xs-menu').toggleClass('visible-xs').toggleClass('hidden-xs');
    $('#btnShow').toggle();
});

$("#mainSearch").click(function(){
    $("#mainSearch").toggleClass("expandSearch");
});



// Quick proof of concept
// Would like to make CSS only

var searchWrapper = document.querySelector('.search-wrapper'),
    searchInput = document.querySelector('.search-input');

document.addEventListener('click', function (e) {
  if (~e.target.className.indexOf('search')) {
    $('#SearchTk').on('click', function() {
        searchWrapper.classList.add('focused');
        searchInput.focus();
    });
  } else {
    searchWrapper.classList.remove('focused');
  }
});

/*$("input[type='checkbox']").change(function(){
    if($(this).is(":checked")){
        $(this).parent().addClass("following"); 
    }else{
        $(this).parent().removeClass("following");  
    }
});*/


});