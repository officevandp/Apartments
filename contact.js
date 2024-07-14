const checkbox12 = document.getElementById("checkbox12");
var btnSend = document.getElementById('btnSend');
if (checkbox12) {
  checkbox12.addEventListener("change", function() {
    checkbox12.value = "true";
   if(checkbox12.checked){
    btnSend.disabled = false;
    console.log(btnSend.disabled)
   }
   else{
    btnSend.disabled = true;
    console.log(btnSend.disabled)
   }
  })
} else {
  console.error("Checkbox with id 'checkbox' not found in the HTML document");
};
