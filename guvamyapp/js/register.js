$(document).ready(function() {
    $("#btn_submit").click(function() {
        var firstName = $("#txtfirstname").val();
        var lastName = $("#txtlastname").val();
        var userName = $("#txtemail").val();
        var password = $("#txtpassword").val();
        var confirmpassword = $("#txtcnfrmpassword").val();
        if(firstName==''||lastName==''||password==''||confirmpassword=='') {
            alert("Please fill all fields.");
            return false;
        }
        $.ajax({
            type: "POST",
            url: "php/register.php",
            data: {
                firstName: firstName,
                lastName: lastName,
                userName: userName,
                password: password,
                confirmpassword: confirmpassword
            },
            cache: false,
            success: function(data) {
                window.location.href="http://localhost/guvamyapp/login.html"; 
                alert(data);
            },
            error: function(xhr, status, error) {
                console.error(xhr);
            }
        });
        
    });
});