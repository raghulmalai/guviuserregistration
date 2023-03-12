$(document).on('click','#showData',function(e){
    $.ajax({    
      type: "GET",
      url: "php/profile.php",             
      dataType: "html",                  
      success: function(data){                    
          $("#table-container").html(data);          
      }
  });
});