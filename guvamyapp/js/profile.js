$("#signout").click(function(){
    window.location.href="http://localhost/guvamyapp/login.html";
});

$("#btn_submit").click(function(){
$(document).ready(function() {
$("#btn_submit").click(function() {
    var txtName = $("#txtName").val();
    var txtgender = $("#txtgender").val();
    var txtage = $("#txtage").val();
    var txtquali = $("#txtquali").val();
    var txtnation = $("#txtnation").val();
    var txtaddress = $("#txtaddress").val();
    var txtpercent = $("#txtpercent").val();
    if(txtName=='') {
        alert("Please fill all fields.");
        return false;
    }
    $.ajax({
        type: "POST",
        url: "php/profile.php",
        data: {
            txtName: txtName,
            txtgender: txtgender,
            txtage: txtage,
            txtquali: txtquali,
            txtnation: txtnation,
            txtaddress: txtaddress,
            txtpercent: txtpercent
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
});

