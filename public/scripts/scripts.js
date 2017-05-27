$(onReady);



function onReady() {
    console.log('Inside of onReady');
    // $('#addButton').on('click', addButttonClicked);

    $(".calculatorButton").on('click', calculatorButtonclicked);
}

// function addButttonClicked() {
//     console.log('addButttonClicked was clicked');
//     console.log($(this).text());
//     var objectToSend = {
//         x:$('#firstInput').val(),
//         y:$('#secondInput').val(),
//         type:'add'
//     };//end of objectToSend
//
//     console.log(objectToSend);
//
//     $.ajax({
//         type:'POST',
//         url:'/calculate',
//         data:objectToSend,
//         success: function(res) {
//             console.log('back from server with', res);
//             console.log(res.calc[res.calc.length - 1].results);
//             $("#equals").text(res.calc[res.calc.length - 1].results);
//
//
//         }
//     });//end of ajax
//
// }//end of addButttonClicked

function calculatorButtonclicked(){
    console.log('calculatorButtonclicked clicked');



    var objectToSend = {
          x:$('#firstInput').val(),
          y:$('#secondInput').val(),

      };//end of objectToSend

      switch ($(this).text()) {
        case '+':
            objectToSend.type = 'add';
            break;
        case '-':
            objectToSend.type = 'sub';
            break;
        case 'X':
            objectToSend.type = 'mult';
            break;
        case '/':
            objectToSend.type = 'div';
            break;
         default:
            console.log('inside of break');

      }//end of switch

        $.ajax({
            type:'POST',
            url:'/calculate',
            data:objectToSend,
            success: function(res) {
                console.log('back from server with response', res);
                console.log(res.calc[res.calc.length - 1].results);
                $("#equals").text(res.calc[res.calc.length - 1].results);
            }//end of success
        });//end of ajax


    console.log(objectToSend);
}//end of calculatorButtonclicked
