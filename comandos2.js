function calcular(oper) {
   var valor1 = document.calcform.valor1.value;
   var p1 = "0.06";
   var p2 = "0.18";
   var p3 = "0.75";
   
   var p4 = "0.150";
   var p5 = "0.5";
   var p6 = "0.21";
   var p7 = "0.73";

	var valor1 = parseFloat(valor1.replace(',', '.'));
   
   if (oper == "opc1") {
            var res1 = valor1*p1;
            var res2 = valor1*p2;
            var res3 = valor1*p3;
            var res4 = valor1*p4;
            var res5 = valor1*p5;
            var res6 = valor1*p6;
            var res7 = valor1*p7;

   } else {
      if (oper == "opc2") {
            var res4 = valor1*p4;
            var res5 = valor1*p5;
            var res6 = valor1*p6;
            var res7 = valor1*p7;
         }
      }

   document.calcform.res1.value = res1;
   document.calcform.res2.value = res2;
   document.calcform.res3.value = res3;
   document.calcform.res4.value = res4;
   document.calcform.res5.value = res5;
   document.calcform.res6.value = res6;
   document.calcform.res7.value = res7;
}
