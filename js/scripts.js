
  var small,medium,large;
  var crustPrices=[200,150,100]
  var sizes=[small,medium,large];
  var sizePrices=[1000,850,600]
  var toppingPrices=[50,50,50]
  
  function myPrice() {
  var inputSize=document.getElementById("size").value;
  var inputCrust=document.getElementById("crust").value;
  var inputTopping=document.getElementById("topping").value;

  if (inputSize=="large" && inputCrust=="crispy" && inputTopping=="mushroom") {
    document.getElementById("result").innerHTML=("Your price should be " + parseInt(sizePrices[0] + toppingPrices[0]+crustPrices[0]));
  }
  else if (inputSize=="large" && inputCrust=="stuffed" && inputTopping=="mushroom") {
    document.getElementById("result").innerHTML=("Your price should be " + parseInt(sizePrices[0] + toppingPrices[0]+crustPrices[1]))
  }
  else if (inputSize=="large" && inputCrust=="gluten-free" && inputTopping=="mushroom") {
    document.getElementById("result").innerHTML=("Your price should be " + parseInt(sizePrices[0] + toppingPrices[0]+crustPrices[2]))
  }
  else if (inputSize=="medium" && inputCrust=="crispy" && inputTopping=="mushroom") {
    document.getElementById("result").innerHTML=("Your price should be " + parseInt(sizePrices[1] + toppingPrices[0]+crustPrices[0]))
  }
  else if (inputSize=="medium" && inputCrust=="stuffed" && inputTopping=="mushroom") {
    document.getElementById("result").innerHTML= ("Your price should be " + parseInt(sizePrices[1] + toppingPrices[0]+crustPrices[1]))
  }
  }
 

  