//localStorage.setItem("tabella", "");

$("#tabella").append(localStorage.getItem("tabella"));

$("#btnpiu").click(function () {
  calculation("+");
});
$("#btnmeno").click(function () {
  calculation("-");
});
$("#btnper").click(function () {
  calculation("*");
});
$("#btndiv").click(function () {
  calculation("/");
});

var calculation = function (segno) {
  var num1 = parseInt($("#num1").val());
  var num2 = parseInt($("#num2").val());

  console.log(num1);
  console.log(num1);

  switch (segno) {
    case "+":
      var ris = num1 + num2;
      break;

    case "-":
      var ris = num1 - num2;
      break;

    case "*":
      var ris = num1 * num2;
      break;

    case "/":
      var ris = num1 / num2;
      break;
  }

  var stringa =
    "<tr><td>" +
    num1 +
    "</td>" +
    "<td style ='text-align:center'>" +
    segno +
    "</td>+" +
    "<td>" +
    num2 +
    "</td>" +
    "<td>" +
    ris +
    "</td></tr>";

  var table = localStorage.getItem("tabella");

  localStorage.setItem("tabella", table + stringa);

  $("#tabella").append(stringa);
};
