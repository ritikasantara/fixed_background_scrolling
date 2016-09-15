// smooth scrolling effect 

$(document).ready(function(){

  $('nav a').click(function(){

    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname){

      var $target = $(this.hash);

      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length){

        var targetOffset = $target.offset().top;

        $('html,body').animate({scrollTop: targetOffset}, 500);

        return false;

      }

    }

  });

// search box highlighting on mouseenter  

  $('input').on({
     
     mouseenter: function(){

       $(this).css('border','1px solid #fff');

     },

     mouseleave: function(){

      $(this).css('border','1px solid #87cefa');

     }

  });

});