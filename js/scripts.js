
  var small,medium,large;
  var crustPrices=[200,150,100]
  var sizes=[small,medium,large];
  var sizePrices=[1000,850,600]
  var toppingPrices=[50,50,50]
  
  function myPrice() {
  var inputSize=document.getElementById("size").value;
  var inputCrust=document.getElementById("crust").value;
  var inputTopping=document.getElementById("topping").value;
//large** crust type is changing**mushroom
  if (inputSize=="large" && inputCrust=="crispy" && inputTopping=="mushroom") {
    document.getElementById("result").innerHTML=("Your price should be " + parseInt(sizePrices[0] + toppingPrices[0]+crustPrices[0]));
  }
  else if (inputSize=="large" && inputCrust=="stuffed" && inputTopping=="mushroom") {
    document.getElementById("result").innerHTML=("Your price should be " + parseInt(sizePrices[0] + toppingPrices[0]+crustPrices[1]))
  }
  else if (inputSize=="large" && inputCrust=="gluten-free" && inputTopping=="mushroom") {
    document.getElementById("result").innerHTML=("Your price should be " + parseInt(sizePrices[0] + toppingPrices[0]+crustPrices[2]))
  }
  //large**crust type is changing**onion
  else if (inputSize=="large" && inputCrust=="crispy" && inputTopping=="onion") {
    document.getElementById("result").innerHTML=("Your price should be " + parseInt(sizePrices[0] + toppingPrices[1]+crustPrices[0]));
  }
  else if (inputSize=="large" && inputCrust=="stuffed" && inputTopping=="onion") {
    document.getElementById("result").innerHTML=("Your price should be " + parseInt(sizePrices[0] + toppingPrices[1]+crustPrices[1]));
  }
  else if (inputSize=="large" && inputCrust=="gluten-free" && inputTopping=="onion") {
    document.getElementById("result").innerHTML=("Your price should be " + parseInt(sizePrices[0] + toppingPrices[1]+crustPrices[2]))
  }
  //large**crust type is changing**bacon
  else if (inputSize=="large" && inputCrust=="crispy" && inputTopping=="bacon") {
    document.getElementById("result").innerHTML=("Your price should be " + parseInt(sizePrices[0] + toppingPrices[2]+crustPrices[0]));
  }
  else if (inputSize=="large" && inputCrust=="stuffed" && inputTopping=="bacon") {
    document.getElementById("result").innerHTML=("Your price should be " + parseInt(sizePrices[0] + toppingPrices[2]+crustPrices[1]))
  }
  else if (inputSize=="large" && inputCrust=="gluten-free" && inputTopping=="bacon") {
    document.getElementById("result").innerHTML=("Your price should be " + parseInt(sizePrices[0] + toppingPrices[2]+crustPrices[2]))
  }


//medium**crust type is changing**mushroom
  else if (inputSize=="medium" && inputCrust=="crispy" && inputTopping=="mushroom") {
    document.getElementById("result").innerHTML=("Your price should be " + parseInt(sizePrices[1] + toppingPrices[0]+crustPrices[0]))
  }
  else if (inputSize=="medium" && inputCrust=="stuffed" && inputTopping=="mushroom") {
    document.getElementById("result").innerHTML= ("Your price should be " + parseInt(sizePrices[1] + toppingPrices[0]+crustPrices[1]))
  }
  else if (inputSize=="medium" && inputCrust=="gluten-free" && inputTopping=="mushroom") {
    document.getElementById("result").innerHTML= ("Your price should be " + parseInt(sizePrices[1] + toppingPrices[0]+crustPrices[2]))
  }
//medium**crust type is changing**onion
  else if (inputSize=="medium" && inputCrust=="crispy" && inputTopping=="onion") {
    document.getElementById("result").innerHTML=("Your price should be " + parseInt(sizePrices[1] + toppingPrices[1]+crustPrices[0]))
  }
  else if (inputSize=="medium" && inputCrust=="stuffed" && inputTopping=="onion") {
    document.getElementById("result").innerHTML= ("Your price should be " + parseInt(sizePrices[1] + toppingPrices[1]+crustPrices[1]))
  }
  else if (inputSize=="medium" && inputCrust=="gluten-free" && inputTopping=="onion") {
    document.getElementById("result").innerHTML= ("Your price should be " + parseInt(sizePrices[1] + toppingPrices[1]+crustPrices[2]))
  }
//medium**crust type is changing**bacon
else if (inputSize=="medium" && inputCrust=="crispy" && inputTopping=="bacon") {
  document.getElementById("result").innerHTML=("Your price should be " + parseInt(sizePrices[1] + toppingPrices[2]+crustPrices[0]))
}
else if (inputSize=="medium" && inputCrust=="stuffed" && inputTopping=="bacon") {
  document.getElementById("result").innerHTML= ("Your price should be " + parseInt(sizePrices[1] + toppingPrices[2]+crustPrices[1]))
}
else if (inputSize=="medium" && inputCrust=="gluten-free" && inputTopping=="bacon") {
  document.getElementById("result").innerHTML= ("Your price should be " + parseInt(sizePrices[1] + toppingPrices[2]+crustPrices[2]))
}


//small**crust type is changing**mushroom

  else if (inputSize=="small" && inputCrust=="crispy" && inputTopping=="mushroom") {
    document.getElementById("result").innerHTML=("Your price should be " + parseInt(sizePrices[2] + toppingPrices[0]+crustPrices[0]))
  }
  else if (inputSize=="small" && inputCrust=="stuffed" && inputTopping=="mushroom") {
    document.getElementById("result").innerHTML=("Your price should be " + parseInt(sizePrices[2] + toppingPrices[0]+crustPrices[1]))
  }
  else if (inputSize=="small" && inputCrust=="gluten-free" && inputTopping=="mushroom") {
    document.getElementById("result").innerHTML=("Your price should be " + parseInt(sizePrices[2] + toppingPrices[0]+crustPrices[2]))
  }

  //small**crust type is changing**onion

  else if (inputSize=="small" && inputCrust=="crispy" && inputTopping=="onion") {
    document.getElementById("result").innerHTML=("Your price should be " + parseInt(sizePrices[2] + toppingPrices[1]+crustPrices[0]))
  }
  else if (inputSize=="small" && inputCrust=="stuffed" && inputTopping=="onion") {
    document.getElementById("result").innerHTML=("Your price should be " + parseInt(sizePrices[2] + toppingPrices[1]+crustPrices[1]))
  }
  else if (inputSize=="small" && inputCrust=="gluten-free" && inputTopping=="onion") {
    document.getElementById("result").innerHTML=("Your price should be " + parseInt(sizePrices[2] + toppingPrices[1]+crustPrices[2]))
  }


  //small**crust type is changing**bacon
  else if (inputSize=="small" && inputCrust=="crispy" && inputTopping=="bacon") {
    document.getElementById("result").innerHTML=("Your price should be " + parseInt(sizePrices[2] + toppingPrices[2]+crustPrices[0]))
  }
  else if (inputSize=="small" && inputCrust=="stuffed" && inputTopping=="bacon") {
    document.getElementById("result").innerHTML=("Your price should be " + parseInt(sizePrices[2] + toppingPrices[2]+crustPrices[1]))
  }
  else if (inputSize=="small" && inputCrust=="gluten-free" && inputTopping=="bacon") {
    document.getElementById("result").innerHTML=("Your price should be " + parseInt(sizePrices[2] + toppingPrices[2]+crustPrices[2]))
  }
  else {
    document.getElementById("result").innerHTML=("Kindly fill in all details above");

  }

 
  }
 

  