$(document).ready(function() {
  $("button").on("click", function(e) {
    var oper = $(this).html()
    console.log(oper)
    if (oper === "+") {
      var answer = Number($("#num_one").val()) + Number($("#num_two").val())
    }

    if (oper === "-") {
      var answer = Number($("#num_one").val()) - Number($("#num_two").val())
    }

    if (oper === "*") {
      var answer = Number($("#num_one").val()) * Number($("#num_two").val())
    }

    if (oper === "/") {
      var answer = Number($("#num_one").val()) / Number($("#num_two").val())
    }

    $("#answer").val(answer)
  })
})
