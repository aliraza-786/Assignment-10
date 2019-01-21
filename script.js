
function bill(){
        var bill = 0;
        var discount=0;
        var bill1 =0;
        var bill2 =0;
        var bill3 =0;
        function book(){
            
            var checkbox = document.getElementById("book");
            let num1 = document.getElementById("num1").value;
            if(checkbox.checked == true)
            {
                bill1 = 20 * num1;
            }
        }
        function shirt(){
            
            var checkbox = document.getElementById("shirt");
            var num2 = document.getElementById("num2").value;
            if(checkbox.checked == true)
            {
                bill2 = 20 * num2;
            }
        }
        function bracelet(){

            var checkbox = document.getElementById("bracelet");
            var num3 = document.getElementById("num3").value;
            if(checkbox.checked == true)
            {
                bill3 = 10 * num3;
            }
        }
        
        book();
        shirt();
        bracelet();
        // Add bill1 , bill2 , bill3 in bill;
        bill = bill1 + bill2 + bill3;
        // if bill is greater then $500 discount 30%; 
        if(bill > 500){
            discount =  bill * 30/100;
            bill = bill - discount;
            var result = "Congrats You Discount : $"+ discount + "<br/> " + "<b>Your Total Bill IS: $</b>" + bill ;
            document.getElementById("result").innerHTML = result;
       
        }
        else{
            var result = "<b>Your Total Bill IS :</b>" + "$" + bill;
            document.getElementById("result").innerHTML = result;
        }
    }