// $('button').click(function() {
//   $('.prviDiv').hide(2000);
// });

// $('button').on('click', function() {
//   $('.prviDiv').hide(2000);
// });

//Sklonicemo prvi div
// $('.btn1').on('click', function() {
//   $('.prviDiv').hide(2000);
// });
// ////Sklonicemo drugi div

// $('.btn2').on('click', function() {
//   $('.drugiDiv').hide(2000);
// });

// //Sklonicemo treci div
// $('.btn3').on('click', function() {
//   $('.treciDiv').hide(2000);
// });

// $('.dugmici').on('click', 'button', function() {
//   $('.treciDiv').hide(2000);
// });

// $('.dugmici').on('click', 'button', function() {
//   var konkretnoDugme = $(this).attr('data-target');
//   $(konkretnoDugme).hide(2000);
// });

$('.dugmici').on('mouseenter mouseleave', 'button', function() {
  var konkretnoDugme = $(this).attr('data-target');
  $(konkretnoDugme).toggle(2000);
});

