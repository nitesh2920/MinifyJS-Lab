// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var body = document.getElementById("gradient");

// function setGradient() {
//   body.style.background = 
//     "linear-gradient(to right, " 
//     + color1.value 
//     + ", "
//     + color2.value 
//     +")";

//   css.textContent = body.style.background + ";";
// }

// color1.addEventListener("input", setGradient)

// color2.addEventListener("input", setGradient)

// function copyGradientToClipboard() {
//   const gradientStyle = getComputedStyle(document.querySelector('.copy-gradient')).background;
//   const textarea = document.createElement('textarea');
//   textarea.value = gradientStyle;
//   document.body.appendChild(textarea);

  
//   textarea.select();
//   textarea.setSelectionRange(0, 99999); 


//   document.execCommand('copy');
//   document.body.removeChild(textarea);
//   alert('Gradient style copied to clipboard: ' + gradientStyle);
// }

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
    body.style.background = 
        "linear-gradient(to right, " 
        + color1.value 
        + ", "
        + color2.value 
        + ")";

    css.textContent = body.style.background + ";";
}

// Call setGradient initially to set the default background on page load
setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

function copyGradientToClipboard() {
    const gradientStyle = getComputedStyle(body).background;
    const textarea = document.createElement('textarea');
    textarea.value = gradientStyle;
    document.body.appendChild(textarea);

    textarea.select();
    textarea.setSelectionRange(0, 99999); 

    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Gradient style copied to clipboard: ' + gradientStyle);
}
