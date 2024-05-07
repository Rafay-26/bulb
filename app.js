// Exercise 26 to 34

// 1:
//  var input = +prompt("Enter number ");
// var num1 = Math.floor(input);
// var num2 = Math.ceil(input);
// var num3 = Math.round(input);
// document.write(
//     `${input} <br/> round off values ${num3} <br/> floor values ${num1} <br/> ceil vlues ${num2}`
// )


// 2: var input = +prompt("Enter -ve number ");
// var num1 = Math.floor(input);
// var num2 = Math.ceil(input);
// var num3 = Math.round(input);
// document.write(
//     `${input} <br/> round off values ${num3} <br/> floor values ${num1} <br/> ceil values ${num2}`
// )



// 5: var input = prompt("Enter number");
// if (input < 0) {
//     var p = input * -1;
//     document.write(input, " ", p)
// }else {
//     document.write(input);
// }


// 6: var user1 = +prompt("Enter value1 ");
// var user2 = +prompt("Enter value2 ");
// var dice = Math.random() * 6;
// var convert = dice.toFixed(0);
// if (convert == 4 && user1 == 4) {
//     alert(`Your dice value ${user1}`);
// }else if(convert == 6 && user2 == 6) {
//     alert(`Your dice value ${user2}`);
// }else {
//     alert("Value not match");
// }


// 7: var head = +prompt("enter value1 ");
// var tail = +prompt("Entere value2 ");
// var toss = Math.random() * 2;
// var convert = toss.toFixed(0);
// if (convert == 1 && head == 1) {
//     alert("value is head");
// }
// else if (convert == 2 && tail == 2) {
//     alert("value is tail");
// }else {
//     alert("tie")
// }



//8: var num = Math.random() * 100;
//  var convert = num.toFixed(0);
//  document.write(`Random number between 1 and 100: (${convert})`);


//10: var input = +prompt("Enter Number b/w 1 & 10");
// var num = Math.random() *10;
// var convert = num.toFixed(0);
// if (input == convert) {
//     alert(`Congrats ${convert}`);
// }else if( input++ == convert || input-- == convert) {
//     alert(` ${input} You are near to number ${convert}`);
// } else {
//     alert(`Not match ${convert}`);
// }


//11 *********
// var date = new Date();
// // document.write(date);
// var str = date.toString();
// var convert = str.slice(0, 3)
// document.write(convert)

//12: var arr = ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "Sep", "Oct" ,"Nov", "Dec"];
// var mon = new Date().getMonth()
// alert(arr[mon]);



//13: var date = new Date();
// var str = date.toString();
// var convert = str.slice(0, 3)
// document.write(convert)


//14: var date = new Date();
// var str = date.toString();
// var convert = str.slice(0, 3)
// if (convert == "Sat" || convert == "Sun") {
//     alert("It is a fun day");
// }


//15: var date = new Date().getDate();
// if (date >= 15) {
//     document.write(`First fiifteen days of month ${date}`);
// }else {
//     document.write(`Last days of month ${date}`);
// }


//16: var time = new Date().getTime()
// var convert = time / (1000 * 60);
// document.write(time,"<br/>",convert);



//17: var date = new Date().getHours();
// if (date <= 12) {
//     document.write("It's AM")
// }else {
//     document.write("It's PM")
// }


//18 var date = new Date();
// document.write("<b>Current time: </b>"+ date + "<br/> <br/>")
// date.setDate(31);
// date.setFullYear(2020)
// date.setMonth(11)
// date.setMinutes(0)
// date.setSeconds(0)
// document.write("<b>later   time : </b>"+date);


//19: var date = new Date().getTime();
// var date2 = new Date('1 Jan, 2024').getTime();
// var result = date - date2;
// var convert = result / (1000 * 60 * 60 * 24);
// document.write(`${Math.floor(convert)} days passed since Winter vocation end`);


//20: var date = new Date().getTime();
// var date2 = new Date("1 Jan, 2024").getTime();
// var result = date - date2;
// var convert = result / (1000 * 60 );
// document.write(`${Math.floor(convert)} had passed since beigining of 2024`)


//21 var date = new Date();
// document.write(date + "<br/>")
// date.setHours(22)
// document.write(date);


//22: var date = new Date();
// document.write(date + "<br/>")
// date.setFullYear(1924);
// document.write(date);



//23: var date = new Date().getTime();
// var date2 = new Date("15 Dec, 2004").getTime();
// var result = date - date2;
// var convert = result / (1000 * 60 * 60 *24 * 365);
// document.write(`Your age is ${Math.floor(convert)}`)



//24: var arr = ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "Sep", "Oct" ,"Nov", "Dec"];
// var coustName = "Hamza";
// var month = new Date().getMonth();
// var units = 100;
// var charges = 20;
// var withInDue = units * charges;
// var lateCharges = 500;
// var afterDue = withInDue + 500;
// document.write(
//     `
//     <table border = '1px'><b>K-Electric bill</b>
//     <tr><td>Coustomer Name: ${coustName}</td<></tr>
//     <tr><td>Month: ${arr[month]}</td<></tr>
//     <tr><td>Number of Units: ${units}</td<></tr>
//     <tr><td>Charges per unit: ${charges}</td></tr>
//     <tr><td>Net amount payable (with in due date): ${withInDue}</tr></td>
//     <tr><td>Late payment surcharge: ${lateCharges}</tr></td>
//     <tr><td>Amount payable (after due date): ${afterDue}</tr></td>
//     </table> `
// )