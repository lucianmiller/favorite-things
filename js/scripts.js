$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    const favoriteThing1 = $("#input1").val();
    const favoriteThing2 = $("#input2").val();
    const favoriteThing3 = $("#input3").val();

    let array = []
    array.push(favoriteThing);
    console.log(array);
    $("ul").prepend("<li>" + array[0] + "</li>");
  });
});