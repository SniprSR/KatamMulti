// Show and hide items
var text = document.getElementById("text");
var img_11 = document.getElementById("I1.1");
var img_12 = document.getElementById("I1.2");
var img_13 = document.getElementById("I1.3");
var img_14 = document.getElementById("I1.4");
var img_21 = document.getElementById("I2.1");
var img_22 = document.getElementById("I2.2");
var img_23 = document.getElementById("I2.3");
var img_24 = document.getElementById("I2.4");
var img_25 = document.getElementById("I2.5");

var btn_11 = document.getElementById("P1.1");
var btn_12 = document.getElementById("P1.2");
var btn_13 = document.getElementById("P1.3");
var btn_14 = document.getElementById("P1.4");
var btn_21 = document.getElementById("P2.1");
var btn_22 = document.getElementById("P2.2");
var btn_23 = document.getElementById("P2.3");
var btn_24 = document.getElementById("P2.4");
var btn_25 = document.getElementById("P2.5");


function p11Switch() {
    text.innerHTML = "P1 - Segment 1";
    img_11.hidden = false;
    img_12.hidden = true;
    img_13.hidden = true;
    img_14.hidden = true;
    
    img_21.hidden = true;
    img_22.hidden = true;
    img_23.hidden = true;
    img_24.hidden = true;
    img_25.hidden = true;

    btn_11.style.opacity = 1;
    btn_12.style.opacity = 0.6;
    btn_13.style.opacity = 0.6;
    btn_14.style.opacity = 0.6;
    
    btn_21.style.opacity = 0.6;
    btn_22.style.opacity = 0.6;
    btn_23.style.opacity = 0.6;
    btn_24.style.opacity = 0.6;
    btn_25.style.opacity = 0.6;
}

function p12Switch() {
    text.innerHTML = "P1 - Segment 2";
    img_11.hidden = true;
    img_12.hidden = false;
    img_13.hidden = true;
    img_14.hidden = true;
    
    img_21.hidden = true;
    img_22.hidden = true;
    img_23.hidden = true;
    img_24.hidden = true;
    img_25.hidden = true;

    btn_11.style.opacity = 0.6;
    btn_12.style.opacity = 1;
    btn_13.style.opacity = 0.6;
    btn_14.style.opacity = 0.6;
    
    btn_21.style.opacity = 0.6;
    btn_22.style.opacity = 0.6;
    btn_23.style.opacity = 0.6;
    btn_24.style.opacity = 0.6;
    btn_25.style.opacity = 0.6;
}

function p13Switch() {
    text.innerHTML = "P1 - Segment 3";
    img_11.hidden = true;
    img_12.hidden = true;
    img_13.hidden = false;
    img_14.hidden = true;
    
    img_21.hidden = true;
    img_22.hidden = true;
    img_23.hidden = true;
    img_24.hidden = true;
    img_25.hidden = true;

    btn_11.style.opacity = 0.6;
    btn_12.style.opacity = 0.6;
    btn_13.style.opacity = 1;
    btn_14.style.opacity = 0.6;
    
    btn_21.style.opacity = 0.6;
    btn_22.style.opacity = 0.6;
    btn_23.style.opacity = 0.6;
    btn_24.style.opacity = 0.6;
    btn_25.style.opacity = 0.6;
}

function p14Switch() {
    text.innerHTML = "P1 - Segment 4";
    img_11.hidden = true;
    img_12.hidden = true;
    img_13.hidden = true;
    img_14.hidden = false;
    
    img_21.hidden = true;
    img_22.hidden = true;
    img_23.hidden = true;
    img_24.hidden = true;
    img_25.hidden = true;

    btn_11.style.opacity = 0.6;
    btn_12.style.opacity = 0.6;
    btn_13.style.opacity = 0.6;
    btn_14.style.opacity = 1;
    
    btn_21.style.opacity = 0.6;
    btn_22.style.opacity = 0.6;
    btn_23.style.opacity = 0.6;
    btn_24.style.opacity = 0.6;
    btn_25.style.opacity = 0.6;
}



function p21Switch() {
    text.innerHTML = "P2 - Segment 1";
    img_11.hidden = true;
    img_12.hidden = true;
    img_13.hidden = true;
    img_14.hidden = true;
    
    img_21.hidden = false;
    img_22.hidden = true;
    img_23.hidden = true;
    img_24.hidden = true;
    img_25.hidden = true;

    btn_11.style.opacity = 0.6;
    btn_12.style.opacity = 0.6;
    btn_13.style.opacity = 0.6;
    btn_14.style.opacity = 0.6;
    
    btn_21.style.opacity = 1;
    btn_22.style.opacity = 0.6;
    btn_23.style.opacity = 0.6;
    btn_24.style.opacity = 0.6;
    btn_25.style.opacity = 0.6;
}

function p22Switch() {
    text.innerHTML = "P2 - Segment 2";
    img_11.hidden = true;
    img_12.hidden = true;
    img_13.hidden = true;
    img_14.hidden = true;
    
    img_21.hidden = true;
    img_22.hidden = false;
    img_23.hidden = true;
    img_24.hidden = true;
    img_25.hidden = true;

    btn_11.style.opacity = 0.6;
    btn_12.style.opacity = 0.6;
    btn_13.style.opacity = 0.6;
    btn_14.style.opacity = 0.6;
    
    btn_21.style.opacity = 0.6;
    btn_22.style.opacity = 1;
    btn_23.style.opacity = 0.6;
    btn_24.style.opacity = 0.6;
    btn_25.style.opacity = 0.6;
}

function p23Switch() {
    text.innerHTML = "P2 - Segment 3";
    img_11.hidden = true;
    img_12.hidden = true;
    img_13.hidden = true;
    img_14.hidden = true;
    
    img_21.hidden = true;
    img_22.hidden = true;
    img_23.hidden = false;
    img_24.hidden = true;
    img_25.hidden = true;

    btn_11.style.opacity = 0.6;
    btn_12.style.opacity = 0.6;
    btn_13.style.opacity = 0.6;
    btn_14.style.opacity = 0.6;
    
    btn_21.style.opacity = 0.6;
    btn_22.style.opacity = 0.6;
    btn_23.style.opacity = 1;
    btn_24.style.opacity = 0.6;
    btn_25.style.opacity = 0.6;
}

function p24Switch() {
    text.innerHTML = "P2 - Segment 4";
    img_11.hidden = true;
    img_12.hidden = true;
    img_13.hidden = true;
    img_14.hidden = true;
    
    img_21.hidden = true;
    img_22.hidden = true;
    img_23.hidden = true;
    img_24.hidden = false;
    img_25.hidden = true;

    btn_11.style.opacity = 0.6;
    btn_12.style.opacity = 0.6;
    btn_13.style.opacity = 0.6;
    btn_14.style.opacity = 0.6;
    
    btn_21.style.opacity = 0.6;
    btn_22.style.opacity = 0.6;
    btn_23.style.opacity = 0.6;
    btn_24.style.opacity = 1;
    btn_25.style.opacity = 0.6;
}

function p25Switch() {
    text.innerHTML = "P2 - Segment 5";
    img_11.hidden = true;
    img_12.hidden = true;
    img_13.hidden = true;
    img_14.hidden = true;
    
    img_21.hidden = true;
    img_22.hidden = true;
    img_23.hidden = true;
    img_24.hidden = true;
    img_25.hidden = false;

    btn_11.style.opacity = 0.6;
    btn_12.style.opacity = 0.6;
    btn_13.style.opacity = 0.6;
    btn_14.style.opacity = 0.6;
    
    btn_21.style.opacity = 0.6;
    btn_22.style.opacity = 0.6;
    btn_23.style.opacity = 0.6;
    btn_24.style.opacity = 0.6;
    btn_25.style.opacity = 1;
}