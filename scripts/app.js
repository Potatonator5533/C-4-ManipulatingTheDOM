let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn10 = document.getElementById("btn10");

let change1 = document.getElementById("change1");
let change2 = document.getElementById("change2");
let change3 = document.getElementById("change3");
let change4 = document.getElementById("change4");
let change5 = document.getElementById("change5");
let change6 = document.getElementById("change6");
let change7 = document.getElementById("change7");
let change8 = document.getElementById("change8");
let change9 = document.getElementById("change9");
let change10 = document.getElementById("change10");


btn1.addEventListener('click', function(e){
    change1.className = 'BodyBg';
});

btn2.addEventListener('click', function(e){
    change2.className = 'col-3';
});

btn3.addEventListener('click', function(e){
    change3.className = 'loremFix';
});

btn4.addEventListener('click', function(e){
    change4.className = 'invis';
});

btn5.addEventListener('click', function(e){
    change5.className = '';
});

btn6.addEventListener('click', function(e){
    change6.className = 'loremBg';
});

btn7.addEventListener('click', function(e){
    change7.innerText = "___  ___\n o o\n __";
    change7.className = 'adjustBtn7';
});

btn8.addEventListener('click', function(e){
    change8.className = 'rand' + Math.floor(Math.random() * 3);
});

btn9.addEventListener('click', function(e){
    change9.innerText = "9 gnihtemoS egnahC";
});

btn10.addEventListener('click', function(e){
    change10.className = 'row fillBtn';
});