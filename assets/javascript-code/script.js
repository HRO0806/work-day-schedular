
var currentDate = moment().format('dddd MMM DD');
var currentHour = moment().format('hh')
var rememberOne = localStorage.getItem('1');
var rememberTwo = localStorage.getItem('2');
var rememberThree = localStorage.getItem('3');
var rememberFour = localStorage.getItem('4');
var rememberFive = localStorage.getItem('5');
var rememberSix = localStorage.getItem('6');
var rememberSeven = localStorage.getItem('7');
var rememberEight = localStorage.getItem('8');
var rememberNine = localStorage.getItem('9');
var blockOne = $('#block-1').val(9);
var blockTwo = $('#block-2').val(10);
var blockThree = $('#block-3').val(11);
var blockFour = $('#block-4').val(12);
var blockFive = $('#block-5').val(13);
var blockSix = $('#block-6').val(14);
var blockSeven = $('#block-7').val(15);
var blockEight = $('#block-8').val(16);
var blockNine = $('#block-9').val(17);

$('.date').text(currentDate);

currentHour = parseInt(currentHour);

console.log(currentHour);

if($('#block-1').val() < currentHour) {
    $('#block-1').addClass('past');
} else if($('#block-1').val() === currentHour) {
    $('#block-1').addClass('present');
} else {
    $('#block-1').addClass('future');
}

if ($('#block-2').val() < currentHour) {
    $('#block-2').addClass('past');
} else if($('#block-2').val() === currentHour) {
    $('#block-2').addClass('present');
} else {
    $('#block-2').addClass('future');
}

if ($('#block-3').val() < currentHour) {
    $('#block-3').addClass('past');
} else if($('#block-3').val() === currentHour) {
    $('#block-3').addClass('present');
} else {
    $('#block-3').addClass('future');
}

if ($('#block-4').val() < currentHour) {
    $('#block-4').addClass('past');
} else if($('#block-4').val() === currentHour) {
    $('#block-4').addClass('present');
} else {
    $('#block-4').addClass('future');
}

if ($('#block-5').val() < currentHour) {
    $('#block-5').addClass('past');
} else if($('#block-5').val() === currentHour) {
    $('#block-5').addClass('present');
} else {
    $('#block-5').addClass('future');
}

if ($('#block-6').val() < currentHour) {
    $('#block-6').addClass('past');
} else if($('#block-6').val() === currentHour) {
    $('#block-6').addClass('present');
} else {
    $('#block-6').addClass('future');
}

if ($('#block-7').val() < currentHour) {
    $('#block-7').addClass('past');
} else if($('#block-7').val() === currentHour) {
    $('#block-7').addClass('present');
} else {
    $('#block-7').addClass('future');
}

if ($('#block-8').val() < currentHour) {
    $('#block-8').addClass('past');
} else if($('#block-8').val() === currentHour) {
    $('#block-8').addClass('present');
} else {
    $('#block-8').addClass('future');
}

if ($('#block-9').val() < currentHour) {
    $('#block-9').addClass('past');
} else if($('#block-9').val() === currentHour) {
    $('#block-9').addClass('present');
} else {
    $('#block-9').addClass('future');
}

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
            alert('Your task has been saved!');
            localStorage.setItem('1', text); 
        })

        $('.save-button-2').on('click', function() {
            alert('Your task has been saved!');
            localStorage.setItem('2', text); 
        })

        $('.save-button-3').on('click', function() {
            alert('Your task has been saved!');
            localStorage.setItem('3', text); 
        })

        $('.save-button-4').on('click', function() {
            alert('Your task has been saved!');
            localStorage.setItem('4', text); 
        })

        $('.save-button-5').on('click', function() {
            alert('Your task has been saved!');
            localStorage.setItem('5', text); 
        })

        $('.save-button-6').on('click', function() {
            alert('Your task has been saved!');
            localStorage.setItem('6', text); 
        })

        $('.save-button-7').on('click', function() {
            alert('Your task has been saved!');
            localStorage.setItem('7', text); 
        })

        $('.save-button-8').on('click', function() {
            alert('Your task has been saved!');
            localStorage.setItem('8', text); 
        })

        $('.save-button-9').on('click', function() {
            alert('Your task has been saved!');
            localStorage.setItem('9', text); 
        })

        time();
    });
}

time();