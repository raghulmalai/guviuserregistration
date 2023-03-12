$("#btn_submit").click(function() {
    var userName = $("#userName").val();   
    var password = $("#password").val();    
    if(userName==''||password=='') {
        alert("Please enter username and password.");
        return false;
    }    
    $.ajax({
        type: "POST",
        url: "php/login.php",
        data: {
            userName: userName,
            password: password
        },
        cache: false,
        success: function(data) {
          window.location.href="http://localhost/guvamyapp/profile.html";
            alert(data);
        },
        error: function(xhr, status, error) {
            console.error(xhr);
        }
    });
    
});


$(document).ready(function() { 
    $("#linkuser").click(function(){
        window.location.href="http://localhost/guvamyapp/register.html";
 });

});