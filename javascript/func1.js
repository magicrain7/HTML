//fuction은 정의하는것만있고 실행하는거는 따로 만들어줘야됨.
function sum1(a, b) {
    console.log("sum(a,b) 호출");
 var sum = a + b;
 var result = document.getElementById("show");
 result.innerHTML = sum;
}

function sum() {
    console.log("sum() 호출");
    var sum = 0;
    for(var i = 0 ; i<arguments.length; i++){
        sum = sum + arguments[i];
    }
    return sum;
}

function mySum() {
    var result = sum(2,4);
    console.log("결과값: " + result);
}

function arraySum(ary) {
    var sum = 0;
    for( ar of ary) {
        sum = sum + ar;
    }
    return sum;
}


function arrayTest() {
    var numAry = [3,4,5,6,7];
    var result = arraySum(numAry);
    console.log(result);
}
function funcTest(helloFunc) { 
    var hello = document.getElementById("show").innerHTML;
    hello += "world";
    document.getElementById("show").innerHTML = hello;
}

function helloFunc() {
    console.log("helloFunc");
    document.getElementById("show").innerHTML =  "Hello";
}