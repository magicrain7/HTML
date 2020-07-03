function fun1() {
    // document.getElementById("show").innerHTML = "Hello";
}
fun1();
var fun2 = function (str) {
    // document.getElementById("show").innerHTML = "str";
}
fun2("Hello");

function outerFunc(func) {
    func(2,3,4,5,6);
}

function argsFunc() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {  //arguments는 함수안에서 사용할 수 있도록 그 이름이나 특성이 약속되어 있는 일종의 배열이다.
                                                // arguments[0]은 함수로 전달된 첫번째 인자를 알아낼 수 있다. 
                                                // 또 arguments.length를 이용해서 함수로 전달된 인자의 개수를 알아낼 수도 있다. 
                                                // 이러한 특성에 반복문을 결합하면 함수로 전달된 인자의 값을 순차적으로 가져올 수 있다.
                                                //     그 값을 더해서 리턴하면 인자로 전달된 값에 대한 총합을 구하는 함수를 만들 수 있다.
        sum = sum + arguments[i];
    }
    document.getElementById("show").innerHTML = sum;
}

outerFunc(argsFunc);

// outerFunc(function argsFunc(2,3,4,5,6){
//     var sum = 0;
//     for (var i = 0; i < arguments.length; i++) {  
//         sum = sum + arguments[i];
//     }
//     document.getElementById("show").innerHTML = sum;
// })(); //정의문의 받아서 실행까지?