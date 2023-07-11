function addAge() {
   var age = Number(document.getElementById("age").value);
   document.getElementById("age").value = "";

   if (age >= 4 && age <= 15) {
      var total = document.getElementById("total");
      var junior = document.getElementById("junior");
      var intermediate = document.getElementById("intermediate");
      var senior = document.getElementById("senior");

      total.innerHTML = Number(total.innerHTML) + 1;

      if (age <= 7)
         junior.innerHTML = Number(junior.innerHTML) + 1;
      else if (age <= 11)
         intermediate.innerHTML = Number(intermediate.innerHTML) + 1;
      else
         senior.innerHTML = Number(senior.innerHTML) + 1;
   } else {
      alert("Age should be between 4 and 15");
   }
}
