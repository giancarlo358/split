src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"
src="dist/js/bootstrap-checkbox.min.js"
src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"
src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"
src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"


function calc(){
var bill = Number(document.getElementById("bill_with_taxes").value)
var bill_subtotal = Number(document.getElementById("bill_no_taxes").value)
var friends = Number(document.getElementById("friends_html").value)
var tip_percentage = Number(document.getElementById("my_tip").value)
var tip_amount = Number(tip_percentage/100)
var tax_percent_in_decimal = Number((bill-bill_subtotal)/bill_subtotal)
var tax_percent_in_number = tax_percent_in_decimal*100

//tip_total calc
var tip_total = Number(bill_subtotal*tip_amount)
//total calc
var total = Number(bill+tip_total)
//Per Person calc
total_per_person = Number(total/friends)

  //rounding
tip_total_rounded = tip_total.toFixed(2)
total_per_person_rounded = total_per_person.toFixed(2)
total_rounded = total.toFixed(2)
tax_percent_in_number_rounded = tax_percent_in_number.toFixed(2)
 
 //tip_total final
document.getElementById("tip_result").innerHTML="$" + Number(tip_total_rounded)
  
//tax percent paying
document.getElementById("tax_percent_paying").innerHTML="(Tax% = " + Number(tax_percent_in_number_rounded)+")"
//total including tip and tax final
document.getElementById("total_result").innerHTML="$" + Number(total_rounded)
//per person final
document.getElementById("total_per_person_result").innerHTML="$" + Number(total_per_person_rounded)
  
}



