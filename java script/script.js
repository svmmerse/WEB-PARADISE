$(document).ready(function displayDetails(){
    
    $('#checkbox').click(function(){
        if ($(this).is(':checked')){
            $('#password').attr('type','text');
        }else{
            $('#password').attr('type','password');
        }
    })
   
})

