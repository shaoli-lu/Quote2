let pic = document.getElementById('pic');

document.addEventListener('DOMContentLoaded', function() {
getQuote();

})

function getQuote() {
    fetch("https://programming-quotes-api.herokuapp.com/quotes/random/").then(response => response.json()).then(data => {
    
   
        document.querySelector('#quote').innerHTML = '"' + data.en  + '"' ;  
        document.querySelector('#author').innerHTML = "-Author: " + data.author;    
       
        
            
    })  
}

pic.addEventListener('click', getQuote)

$(document).ready(function () {

    $('xdiv').hover(
    function () {
        $(this).stop().fadeOut(function () {
            var $temp = $(this).attr('src');
            $(this).attr('src', $(this).attr('data-alt-src'));
            $(this).attr('data-alt-src', $temp);
        });

        $(this).fadeIn();
    },

    function () {
        $(this).stop().fadeOut(function () {
            var $temp = $(this).attr('data-alt-src');
            $(this).attr('data-alt-src', $(this).attr('src'));
            $(this).attr('src', $temp);
        });

        $(this).fadeIn();

    });
});