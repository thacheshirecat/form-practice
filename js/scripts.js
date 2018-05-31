$(document).ready(function() {

$("#formOne").submit(function(event) {
  var userNameInpute = $("inpute#userName").val()
  // var style = userNameInpute.addClass("fancy")
  $(".userName").text(userNameInpute);

  $("#letter").show();

  event.preventDefault();
})


// $("#formOne").submit(function(event) {
//   var userinputValue = $("input#user-input").val();
//   var louder = userinputValue.toUpperCase();
//   $(".user-input").text(louder);
//
//   event.preventDefault();
// });
//
// //
// // mad lib scripts (disabled)
// //
//
//   $("#formOne").submit(function(event) {
//     var person1Input = $("input#person1").val();
//     var person2Input = $("input#person2").val();
//     var animalInput= $("input#animal").val();
//     var exclamationInput = $("input#exclamation").val();
//     var verbInput = $("input#verb").val();
//     var nounInput = $("input#noun").val();
//
//     $(".person1").text(person1Input);
//     $(".person2").text(person2Input);
//     $(".animal").text(animalInput);
//     $(".exclamation").text(exclamationInput);
//     $(".verb").text(verbInput);
//     $(".noun").text(nounInput);
//
//     $("#story").show();
//
//     event.preventDefault();
//   });
// });
