
     
  $(window).load(function() {
      var boxheight = $('#myCarousel .carousel-inner').innerHeight();
      var itemlength = $('#myCarousel .item').length;
      var triggerheight = Math.round(boxheight/itemlength+1);
      $('#myCarousel .list-group-item').outerHeight(triggerheight);
  });
  
  var monthNames = [ "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December" ];
  var dayNames= ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
  
  var newDate = new Date();
  newDate.setDate(newDate.getDate() + 1);    
  $('#Date').html(dayNames[newDate.getDay()] + ", " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());

  //galeria
  $(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
    //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
    //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
    }
    $(this).addClass("active");
    
    });

    //twiter
    