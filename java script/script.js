$(document).ready(function displayDetails(){
    alert("Selamat Datang di Banyuwangi Paradise");
    $('#checkbox').click(function(){
        if ($(this).is(':checked')){
            $('#password').attr('type','text');
        }else{
            $('#password').attr('type','password');
        }
    })
   
})

