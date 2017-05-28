$(onReady);
var objectToSend = {}; //global variable
function onReady() {
    console.log('log inside of onReady');
    //listner for button
    $(".calculatorNum").on('click', buttonClicked);
} //end of onReady

function buttonClicked() {
    console.log('buttonClicked');

    //adds to the p tag
    $("#inputField").append($(this).text());

    var x = $("#inputField").text();

    //clears the input field
    if ($(this).text() === 'Clear') {
        $("#inputField").empty();

    } //end of clear if statement

    //checks to see what button was clicked and assings x to the objectToSend
    if ($(this).text() === '+') {
        console.log("+ was clicked");
        // $(this).css('box-shadow', "-10px -10px -5px black");
        objectToSend.type = 'add';

        x = x.substring(0, x.length - 1);
        objectToSend.x = x;
        $("#inputField").empty();
        console.log(x);
    } //end of add if statement
    else if ($(this).text() === '-') {
        console.log('- was clicked');
        objectToSend.type = 'sub';
        x = x.substring(0, x.length - 1);
        objectToSend.x = x;
        $("#inputField").empty();
    } //end of sub else if statement
    else if ($(this).text() === 'X') {
        console.log('X was clicked');
        objectToSend.type = 'mult';
        x = x.substring(0, x.length - 1);
        objectToSend.x = x;
        $("#inputField").empty();
    } //end of mult else if statement
    else if ($(this).text() === '/') {
        console.log('X was clicked');
        objectToSend.type = 'div';
        x = x.substring(0, x.length - 1);
        objectToSend.x = x;
        $("#inputField").empty();
    } //end of div else if statement


    //sends all the information to the server to presses when the '=' is clicked
    if ($(this).text() === '=') {
        console.log('inside of the = sign');
        var y = $("#inputField").text();
        y = y.substring(0, y.length - 1);
        objectToSend.y = y;
        $("#inputField").empty();

        $.ajax({
            type: 'POST',
            url: '/calculate',
            data: objectToSend,
            success: function(res) {
                console.log('back from the server with ', res);
                console.log(res.calc[0].result);
                $("#inputField").text(res.calc[res.calc.length - 1].result);
            } //end of success
        }); //end of ajax
    } //end of if statement
} //end of button clicked
