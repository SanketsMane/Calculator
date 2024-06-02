const display = document.getElementById("display")


function appendToDisplay(value){
  display.value += value
}

function clearDisplay()
{
  display.value = ""
}

function calculate()
{

  if(display.value === "")
  {
    alert("PLEASE ENTER VALUE")
  }

  try{

    let result = eval(display.value)

    display.value = result;
  }

  catch {
    display.value("Error")
  }


}
