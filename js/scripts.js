$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    const favoriteThing = $("#input1").val();

    let array = []
    array.push(favoriteThing);
    console.log(array);
    $("ul").prepend("<li>" + array[0] + "</li>");
  });
});