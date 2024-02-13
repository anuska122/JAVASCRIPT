const x = document.getElementById("content");

function getLocation() {
  try {
    navigator.geolocation.getCurrentPosition(showPosition);
  } catch {
    x.innerHTML = err;
  }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}

// CheckValidity Method

function myFunction() {
    const inpObj = document.getElementById("demo");
    if (!inpObj.checkValidity()) {
        document.getElementById("content").innerHTML = inpObj.validationMessage;
    } else {
        document.getElementById("content").innerHTML = "Input OK";
    }
}

function myFunction() {
    let text;
    if (document.getElementById("demo").validity.rangeOverflow) {
      text = "Value too large";
    } else {
        text = "Input OK";
}
    document.getElementById("content").innerHTML = text;
}
function myFunction(){
    let text;
    if (document.getElementById("demo").validity.rangeUnderflow){
        text= "Value is too small";
    } else {
        text = "Input OK";
}
    document.getElementById("content").innerHTML = text;
}