console.log('Something something');
const timer = setTimeout(waitForZero, 15000);
counter = 0
let clicked = false;
var listOfValues = [];
const values = ["cup","1","8","15","4","11","18","7","14","3","10","17","6", "13", "2","9","16", "5","12"];



function waitForZero() {
    var toPlay = document.body.getElementsByClassName("px2BltBZ9d0JArpfjthg AvMQ5DVjNkzOSLuqF9qq x0hCXuXjKDvUh2wAOe99 tabs-bar-item QdM0zIFg42K1J36rsnw1")[0].innerText;
    if (toPlay.replace('WHEEL OF FORTUNE\n', '').localeCompare('00:00')  === 0) {
        console.log("Found Zero: ", toPlay);
        print();
    } else {
        console.log("Still waiting!!")
        setTimeout(waitForZero, 10000);
    }
}

function print() {
    var toPlay = document.body.getElementsByClassName("px2BltBZ9d0JArpfjthg AvMQ5DVjNkzOSLuqF9qq x0hCXuXjKDvUh2wAOe99 tabs-bar-item QdM0zIFg42K1J36rsnw1")[0].innerText;
    if (toPlay.replace('WHEEL OF FORTUNE\n', '').localeCompare('00:00')  === 0) {
        console.log("Need More time", toPlay);
        setTimeout(print, 15000);
    } else if (clicked) {
        console.log("What is clicked: ", clicked);
        ready(toPlay);
    } else clickOnce(toPlay);
}

function clickOnce(toPlay) {
    clicked = true;
    document.getElementsByClassName("Jn_N1pZAR76SxfnblhBk j6rzKtmAv3ycGN7HVml0 bet-slip-amount-button")[0].click();
    document.getElementsByClassName("Jn_N1pZAR76SxfnblhBk bet-slip-amount-button")[0].click();
    ready(toPlay);
}

function ready(toPlay) {
    console.log("Ran for: ", counter); 
    counter++;
    console.log("We are ready!!", toPlay);
    console.log(document.getElementsByClassName('lniXWpSzNSmnFgX1hgZL psfyQr6eMGBCALvSkdHK ElBOwIoaVNx365E81mf9 i5kOCf6aVVpNQgj1FqpS')[0].innerHTML);
    var winningValue = document.getElementsByClassName('lniXWpSzNSmnFgX1hgZL bREIFa6G6EQvI2TAW6N4')[0].innerText;
    console.log("The Winning Value: ", winningValue);

    if (winningValue === '')
        winningValue = "cup";

    for (var i = 0; i < values.length; i++) {

        if (values[i] === winningValue.toString()) {
            listOfValues[0] = values[i];
            for (var j = 1, c = i + 1; j < 4; j++) {
                if (c < values.length) {
                    listOfValues[j] = values[c];
                    c++;
                } else if (c === values.length) {
                    c = 0;
                    listOfValues[j] = values[c];
                    c++;
                }  
            }
            for (var j = 4, c = i - 1; j < 8; j++) {
                if (c < 0) {
                    c = values.length - 1;
                    listOfValues[j] = values[c];
                    c--;
                } else {
                    listOfValues[j] = values[c];
                    c--;
                } 
            }
        }
        if (listOfValues.length > 1)
            break;
    }

    for (var i = 0; i < listOfValues.length; i++)
        console.log("Values to choose from: ", listOfValues[i])

    console.log("The length of the array: ", listOfValues.length);
    chooseValue(0);

    setTimeout(afterBet, 30000);
    
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

function chooseValue(i) {
    if (i < 8) {
        var numbers = new Map([
            ["cup", [0, "lniXWpSzNSmnFgX1hgZL Quf5o5AU1SsfapJnS9v_ ElBOwIoaVNx365E81mf9 i5kOCf6aVVpNQgj1FqpS nlbcJARJ2NHMHc0x92RM"]],
            ["1",  [0, "lniXWpSzNSmnFgX1hgZL psfyQr6eMGBCALvSkdHK ElBOwIoaVNx365E81mf9 i5kOCf6aVVpNQgj1FqpS"]],
            ["4", [1, "lniXWpSzNSmnFgX1hgZL psfyQr6eMGBCALvSkdHK ElBOwIoaVNx365E81mf9 i5kOCf6aVVpNQgj1FqpS"]],
            ["7",  [2, "lniXWpSzNSmnFgX1hgZL psfyQr6eMGBCALvSkdHK ElBOwIoaVNx365E81mf9 i5kOCf6aVVpNQgj1FqpS"]],
            ["10",  [3, "lniXWpSzNSmnFgX1hgZL psfyQr6eMGBCALvSkdHK ElBOwIoaVNx365E81mf9 i5kOCf6aVVpNQgj1FqpS"]],
            ["13",  [4, "lniXWpSzNSmnFgX1hgZL psfyQr6eMGBCALvSkdHK ElBOwIoaVNx365E81mf9 i5kOCf6aVVpNQgj1FqpS"]],
            ["16",  [5, "lniXWpSzNSmnFgX1hgZL psfyQr6eMGBCALvSkdHK ElBOwIoaVNx365E81mf9 i5kOCf6aVVpNQgj1FqpS"]],
            ["2",  [0, "lniXWpSzNSmnFgX1hgZL IP3kd3dPzwsKAtvq3eii ElBOwIoaVNx365E81mf9 i5kOCf6aVVpNQgj1FqpS"]],
            ["5", [1, "lniXWpSzNSmnFgX1hgZL IP3kd3dPzwsKAtvq3eii ElBOwIoaVNx365E81mf9 i5kOCf6aVVpNQgj1FqpS"]],
            ["8",  [2, "lniXWpSzNSmnFgX1hgZL IP3kd3dPzwsKAtvq3eii ElBOwIoaVNx365E81mf9 i5kOCf6aVVpNQgj1FqpS"]],
            ["11",  [3, "lniXWpSzNSmnFgX1hgZL IP3kd3dPzwsKAtvq3eii ElBOwIoaVNx365E81mf9 i5kOCf6aVVpNQgj1FqpS"]],
            ["14",  [4, "lniXWpSzNSmnFgX1hgZL IP3kd3dPzwsKAtvq3eii ElBOwIoaVNx365E81mf9 i5kOCf6aVVpNQgj1FqpS"]],
            ["17",  [5, "lniXWpSzNSmnFgX1hgZL IP3kd3dPzwsKAtvq3eii ElBOwIoaVNx365E81mf9 i5kOCf6aVVpNQgj1FqpS"]],
            ["3",  [0, "lniXWpSzNSmnFgX1hgZL Lf2xPYdx_6eAblqYoT7V ElBOwIoaVNx365E81mf9 i5kOCf6aVVpNQgj1FqpS"]],
            ["6", [1, "lniXWpSzNSmnFgX1hgZL Lf2xPYdx_6eAblqYoT7V ElBOwIoaVNx365E81mf9 i5kOCf6aVVpNQgj1FqpS"]],
            ["9",  [2, "lniXWpSzNSmnFgX1hgZL Lf2xPYdx_6eAblqYoT7V ElBOwIoaVNx365E81mf9 i5kOCf6aVVpNQgj1FqpS"]],
            ["12",  [3, "lniXWpSzNSmnFgX1hgZL Lf2xPYdx_6eAblqYoT7V ElBOwIoaVNx365E81mf9 i5kOCf6aVVpNQgj1FqpS"]],
            ["15",  [4, "lniXWpSzNSmnFgX1hgZL Lf2xPYdx_6eAblqYoT7V ElBOwIoaVNx365E81mf9 i5kOCf6aVVpNQgj1FqpS"]],
            ["18",  [5, "lniXWpSzNSmnFgX1hgZL Lf2xPYdx_6eAblqYoT7V ElBOwIoaVNx365E81mf9 i5kOCf6aVVpNQgj1FqpS"]]
        ]);



        console.log("The i: ", i);
        console.log("The i: ", listOfValues[i]);
        let className = numbers.get(listOfValues[i]);
        console.log("This is the className ", className[1]);
        console.log("The value being clicked: ", document.getElementsByClassName(className[1])[className[0]].innerHTML);
        let number = document.getElementsByClassName(className[1])[className[0]];
        console.log("About to click: ", number.innerText);
        number.click();
        
        i = i +1;
        
        setTimeout(() => {
            console.log("What is i: ", i);
            placeBetFunc(i);
        }, 3000);
    }
}

function placeBetFunc(i) {
    console.log("The value being clicked: ", document.getElementsByClassName("HHIGeahQvz8uCj49XIBu place-bet-button")[0].innerHTML);
    let place = document.getElementsByClassName("HHIGeahQvz8uCj49XIBu place-bet-button")[0];
    place.click();
    console.log("About to click: ", place.innerText);

    setTimeout(() => {
        console.log("What is i: ", i);
        chooseValue(i);
    }, 2000);
}

function afterBet() {
    console.log("Inside after bet");
    var again = document.body.getElementsByClassName("px2BltBZ9d0JArpfjthg AvMQ5DVjNkzOSLuqF9qq x0hCXuXjKDvUh2wAOe99 tabs-bar-item QdM0zIFg42K1J36rsnw1")[0].innerText;
    if (again.replace('WHEEL OF FORTUNE\n', '').localeCompare('00:00')  === 0) {
        console.log("Need More time", again);
        listOfValues.length = 0;
        setTimeout(print, 10000);
    } else setTimeout(() => {
        
        console.log("calling Aftwer");
        afterBet();
    }, 10000);
}
    

    // document.getElementsByClassName('lniXWpSzNSmnFgX1hgZL psfyQr6eMGBCALvSkdHK ElBOwIoaVNx365E81mf9 i5kOCf6aVVpNQgj1FqpS')[0].click();
    





    // your code here
//   });