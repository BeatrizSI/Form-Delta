function onSubmit() {
    
    var elemento = $(".inactive").removeClass("inactive");
    //console.log(elemento);
    $("#cpf").removeClass("invalid");
}
 
function verificarInputs(event) {
    var inputs = $('#cpf');
    event.stopPropagation(); 
    event.preventDefault();
    
    //console.log(inputs);
    if (!inputs.val()){
        inputs.addClass('invalid');
        $('.error').addClass('active');
       
    } else{
        onSubmit();
        $('.error').removeClass("active");
    }
   
 }; 

// Habilite, ou não, o <button>, dependendo da variável:
   // $('button').prop('disabled', !preenchidos); // 