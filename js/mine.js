// $("#home").animate({width:"100%"}, 1000 , function(){
//     $("#home").animate({height : "100vh"},1000 , function(){
//         $("#home h1").fadeIn(1000 , function(){
//             $(".col-md-4:nth-child(1)").slideDown(1000 , function(){
//                 $(".col-md-4:nth-child(2)").slideDown(1000, function(){

//                     $(".col-md-4:nth-child(3)").slideDown(1000)
                        

//                 })
//             })
//         })
//     })
// })

let ulWidth=  $(".side ul").outerWidth();
$(".side ").animate({"left":`-${ulWidth}`},10);

$(".menu").click(function(){
   

   
     if($(".side").css("left") == "0px" ){
        $(".side ").animate({"left":`-${ulWidth}`},1000);

     }else{
        $(".side ").animate({"left":"0px"},1000);

     }
})


$(".close").click(function(){
    $(".side").animate({"left":`-${ulWidth}`},700);
})



// >>>>>>>>>>>>>> Section 2 <<<<<<<<<<<<<<<<<<<<<<<<


$("h2").click(function (eInfo){
   $(eInfo.target).next().slideToggle(500);
   $("p").not( $(eInfo.target).next() ).slideUp(500);

})





  var eventDate = new Date("2024-02-25T00:00:00");

 
  setInterval(function() {
    
    var currentDate = new Date();

    
    var timeDifference = eventDate.getTime() - currentDate.getTime();

    
    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    

     $(".days").html(days + " days " ) ;
    $(".hours").html(hours + " hours") ;
     $(".minutes").html( minutes + " minutes" ) ;
      $(".seconds").html(seconds + " seconds" ) ;
    
  }, 1000); 



  $("textarea").keyup(function(){
   let maxLength = $(this).val().length;
   console.log(maxLength)
   
   $("#chars").text(
      

     100 - maxLength <=0 ? "Your Charaters are Finished" : 100 - maxLength
   //   $(".remain").remove()
      
   )
  })
// ---------------------------------------------------------------

$(".nav a").click(function(eInfo){

   let y = $(eInfo.target).attr('href');

   let x = $(y).offset().top;
  
  $("html,body").animate({scrollTop : x },2000)
 
  console.log(y);
})
