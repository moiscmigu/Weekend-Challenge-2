# Calculator App / Weekend-challange-2

##How it works

- first the html loads and you are able to click on any of the buttons
- When one of the numerical buttons is clicked, it appends it to the p tag that is used to display text on the DOM.

```
$("#inputField").append($(this).text());
```
- When one of the operation buttons gets clicked it assings what ever is on the p tag to a new key named x and another key named type gets set equal to the type of operator button. It also clears the p tag

```
if ($(this).text() === '+') {
    console.log("+ was clicked");

    objectToSend.type = 'add';

    x = x.substring(0, x.length - 1);
    objectToSend.x = x;
    $("#inputField").empty();
    console.log(x);
} //end of add if statement
```
- the user can then type another number to the empty p tag. Once the user presses '=', what ever is in the p tag gets set equal to a new key on the objectToSend object named y
>var y = $("#inputField").text();

>objectToSend.y = y;

- The = button sends the objectToSend to the server using the type:"POST". The server sees what the req.body.type is and than performs the operation

```
if (req.body.type === 'add') {
    console.log('this is going to add');
    var add = Number(req.body.x) + Number(req.body.y);
    req.body.result = add;
    calcArray.push(req.body);

}
```
- the last thing the app does is it gets back the response and displays it in the p tag. Then the user has the choice to continue or clear and start a new operation
