function change(){
    // document.getElementById("red").value;
    var red = document.getElementById("red").value;
    var green = document.getElementById("green").value;
    var blue = document.getElementById("blue").value;
    var transparency = document.getElementById("transparency").value;
    var circleWidth = document.getElementById("circle-width").value;

    console.log("Red: " + red);
    console.log("Green: " + green);
    console.log("Blue: " + blue);
    console.log("Transparency: " + transparency);
    console.log("Circle width: " +circleWidth);

    var x = true;
    console.log(typeof red); //type of value always string
    console.log(typeof x);
    console.log(typeof change);

    document.getElementById("result").innerText="rgba("+red+","+green+","+blue+","+transparency+")";
    // document.getElementById("transparency").innerText=
    document.getElementById("color-picker").style.backgroundColor="rgba("+red+","+green+","+blue+","+transparency+")";

    // for values remember to add % or px or other measurement values!
    // remembr to get the element not the attribute!
    document.getElementById("circle").style.width = circleWidth+"%";
}