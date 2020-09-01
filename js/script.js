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
  

    function checkData(formData){
      let dataIsOk = true;

      if(formData[1].value === ""){
        $("#phoneNumber").addClass('border-color-red');
        dataIsOk = false;
      }
      else{
       $("#phoneNumber").removeClass('border-color-red');
      }

      if(formData[0].value === ""){
       $("#name").addClass('border-color-red');
       dataIsOk = false;
      }
      else{
       $("#name").css('border-color', 'ced4da');
       $("#name").removeClass('border-color-red');
      }
      return dataIsOk;
    }

    const url = 'https://script.google.com/macros/s/AKfycbzhIzDQIfty3TvjPAcWE1ReplikKiDsAIRgp0ZhE9g1u0wbxgc/exec';
    
    $( "form" ).submit(function( e ) {
      e.preventDefault();

       const formData = $( this ).serializeArray();
       let dataIsOk = checkData(formData);
       
      if(dataIsOk){
        $.ajax(
          {
            url: "https://formspree.io/mwkrdanz", 
            method: "POST",
            dataType: "json",
            data: $(this).serializeArray(),
            success: function(result){
              console.log(result);
              $("#form").modal('hide');
            },
            error: function(err){
              console.log(err)
            }
          });
      }
      else{
        $("#form").modal();
      }

    });

    setTimeout(() =>{
      $("#form").modal();
    }, 30000);


  });

