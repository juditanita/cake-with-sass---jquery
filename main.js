$(document).ready(function () {

 



    if($(window).width() < 700){
      $("#menu li a").click(function(){
        $(".navbar").slideToggle(300);
        $("#menuClosed").addClass("hidden");
        $("#menuOpen").removeClass("hidden");
    
        })
    }
   
   
  
      $("#menuOpen").click(function () {
        $(".navbar").css("display", "flex");
        $("#menuOpen").addClass("hidden");
    
        $("#menuClosed").removeClass("hidden");
      });
    
      $("#menuClosed").click(function () {
        $(".navbar").css("display", "none");
    
        $("#menuOpen").removeClass("hidden");
    
        $("#menuClosed").addClass("hidden");
      });
      
     


      

      
   

   


     
        
    
   


  


 


  

   $(".slide-in").hide();
   $(".show-img").click(
   function(){
  
    $('.contact').css('height',"200%");
    $(".slide-in").slideDown(3000).slideUp(5000);
   
    
   })
   

   
  

   var d = new Date;
	var year = d.getFullYear();
    $("#date").append("<small>Copyright &copy;"+ year + " Rivfy</small>");

  })
  
 

