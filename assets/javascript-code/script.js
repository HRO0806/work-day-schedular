
var rememberOne = localStorage.getItem('1');
console.log(rememberOne);
var rememberTwo = localStorage.getItem('2');
console.log(rememberTwo);
var rememberThree = localStorage.getItem('3');
console.log(rememberThree);
var rememberFour = localStorage.getItem('4');
console.log(rememberFour);
var rememberFive = localStorage.getItem('5');
console.log(rememberFive);
var rememberSix = localStorage.getItem('6');
console.log(rememberSix);
var rememberSeven = localStorage.getItem('7');
console.log(rememberSeven);
var rememberEight = localStorage.getItem('8');
console.log(rememberEight);
var rememberNine = localStorage.getItem('9');
console.log(rememberNine);

$(".hour-1").text(rememberOne);
$(".hour-2").text(rememberTwo);
$(".hour-3").text(rememberThree);
$(".hour-4").text(rememberFour);
$(".hour-5").text(rememberFive);
$(".hour-6").text(rememberSix);
$(".hour-7").text(rememberSeven);
$(".hour-8").text(rememberEight);
$(".hour-9").text(rememberNine);

var time = function(){
    $(".text-edit").on('click', function() {
        var text = $(this).text().trim();

        var textInput = $('<textarea>').addClass("form-control").val(text);
        $(this).replaceWith(textInput);

        textInput.trigger("focus");

        save();
    });
}

var save = function() {
    $(".form-control").on('blur', function() {
        var text = $(this).val();

        var taskP = $("<p>")
        .addClass("text-edit")
        .text(text);

        $(this).replaceWith(taskP);

        console.log(text);

        $('.save-button-1').on('click', function() {
            localStorage.setItem('1', text); 
        })

        $('.save-button-2').on('click', function() {
            localStorage.setItem('2', text); 
        })

        $('.save-button-3').on('click', function() {
            localStorage.setItem('3', text); 
        })

        $('.save-button-4').on('click', function() {
            localStorage.setItem('4', text); 
        })

        $('.save-button-5').on('click', function() {
            localStorage.setItem('5', text); 
        })

        $('.save-button-6').on('click', function() {
            localStorage.setItem('6', text); 
        })

        $('.save-button-7').on('click', function() {
            localStorage.setItem('7', text); 
        })

        $('.save-button-8').on('click', function() {
            localStorage.setItem('8', text); 
        })

        $('.save-button-9').on('click', function() {
            localStorage.setItem('9', text); 
        })

        time();
    });
}

time();