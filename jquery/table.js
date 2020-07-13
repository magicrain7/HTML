var jsonData = [{ "id": 1, "first_name": "Mary", "last_name": "Rieme", "email": "mrieme0@nationalgeographic.com", "gender": "Female" },
{ "id": 2, "first_name": "Darbee", "last_name": "Rowter", "email": "drowter1@posterous.com", "gender": "Male" },
{ "id": 3, "first_name": "Artus", "last_name": "Tollerton", "email": "atollerton2@booking.com", "gender": "Male" },
{ "id": 4, "first_name": "Inesita", "last_name": "Waith", "email": "iwaith3@sfgate.com", "gender": "Female" },
{ "id": 5, "first_name": "Fernande", "last_name": "Langstaff", "email": "flangstaff4@cbsnews.com", "gender": "Female" },
{ "id": 6, "first_name": "Carly", "last_name": "Billborough", "email": "cbillborough5@cbc.ca", "gender": "Male" },
{ "id": 7, "first_name": "Francis", "last_name": "Prantl", "email": "fprantl6@sohu.com", "gender": "Male" },
{ "id": 8, "first_name": "Ilyse", "last_name": "Mintoff", "email": "imintoff7@fastcompany.com", "gender": "Female" },
{ "id": 15, "first_name": "Lurleen", "last_name": "Nashe", "email": "lnashee@blogs.com", "gender": "Female" }]

// var titles = ['id','first_name','last_name','email','gender'];

// $(document).ready(function() {
//     var $table = $('<table/>').attr('border','1');
//     var $tr = $('<tr/>');
//     titles.forEach(function(o){
//         $tr.append($('<th/>').text(o));
//     });
//     $table.append($tr);
//     //데이터 영역.
//     jsonData.forEach(function(o) {
//         $tr = $('<tr/>').mouseenter(mouseenterFunc)
//                          .mouseout(mouseoutFunc);
//         titles.forEach(function(f){
//             $tr.append($('<td/>').text(o[f]));
//         })
        
//         $tr.append($('<td/>').append($('<button/>').text('Click').click(btnFunc)));  //이거 왜 안되노
//         $table.append($tr);
//     });

//     $('#show').append($table);
// })

// function mouseenterFunc() {
//     $(this).css('background','aqua');
// }
// function mouseoutFunc() {
//     $(this).css('background','');
// }

var titles = ['id', 'first_name', 'last_name', 'email', 'gender'];

$(document).ready(function () {
    var $table = $('<table />').attr('border', '1');
    var $tr = $('<tr />');
    titles.forEach(function (o) {
        $tr.append($('<th />').text(o));
    });
    $table.append($tr);
    // 데이터 영역.
    jsonData.forEach(function (o) {
        $tr = $('<tr />').mouseenter(mouseenterFunc)
                         .mouseout(mouseoutFunc);
        titles.forEach(function (f) {
            $tr.append($('<td />').text(o[f]));
        })
        $tr.append($('<td />').append($('<button />').text('Click').click(btnFunc)));
        $table.append($tr);
    });
    $('#show').append($table);
})
function btnFunc() {
    $(this).parent().parent().hide();
}
function mouseenterFunc() {
    $(this).css('background', 'yellow');
}
function mouseoutFunc() {
    $(this).css('background', '');
}