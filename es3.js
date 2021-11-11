
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

  $("#tabella").append(stringa);
};

/*
$("#btnper").click(function(){ 
   
  var num1=parseInt($("#num1").val());
  var num2=parseInt($("#num2").val());
  var ris=num1+num2;

  console.log(num1);
  console.log(num1);

   ris=num1*num2;
   var stringa=
    "<tr><td>"+num1+"</td>"+
    "<td style ='text-align:center'>"+"*"+"</td>+"+
    "<td>"+num2+"</td>"+
    "<td>"+ris+"</td></tr>";
   $("#tabella").append(stringa);

  });

  
$("#btndiv").click(function(){ 
   
  var num1=parseInt($("#num1").val());
  var num2=parseInt($("#num2").val());
  var ris=num1+num2;

  console.log(num1);
  console.log(num1);

   ris=num1/num2;
   var stringa=
   "<tr><td>"+num1+"</td>"+
   "<td style ='text-align:center'>/</td>"+
   "<td>"+num2+"</td>"+
   "<td>"+ris+"</td></tr>";
   $("#tabella").append(stringa);

  });
*/
