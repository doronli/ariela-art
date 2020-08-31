$(document).ready(function(){
    $(".nav-tabs a").click(function(){
      const tabId = $(this)[0].hash;
      
      if(tabId === "#big-flower"){
        console.log("big flower");
      }
      else if(tabId === "#small-flower"){
        console.log("small flower");

      }
      else { // seashell
        console.log("seashell");

      }
    });
  });