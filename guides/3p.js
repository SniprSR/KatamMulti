// Show and hide items
var text = document.getElementById("text");
var text2 = document.getElementById("text2");
var img_11 = document.getElementById("I1.1");
var img_12 = document.getElementById("I1.2");
var img_13 = document.getElementById("I1.3");
var img_21 = document.getElementById("I2.1");
var img_22 = document.getElementById("I2.2");
var img_23 = document.getElementById("I2.3");
var img_31 = document.getElementById("I3.1");
var img_32 = document.getElementById("I3.2");
var img_33 = document.getElementById("I3.3");

var btn_11 = document.getElementById("P1.1");
var btn_12 = document.getElementById("P1.2");
var btn_13 = document.getElementById("P1.3");
var btn_21 = document.getElementById("P2.1");
var btn_22 = document.getElementById("P2.2");
var btn_23 = document.getElementById("P2.3");
var btn_31 = document.getElementById("P3.1");
var btn_32 = document.getElementById("P3.2");
var btn_33 = document.getElementById("P3.3");


function p11Switch() {
    text.innerHTML = "P1 - Segment 1";
    text2.innerHTML = "Go towards King Golem, call P2 upon reaching the branching path. Then get Stone, hit switch, and kill King Golem";
    img_11.hidden = false;
    img_12.hidden = true;
    img_13.hidden = true;

    img_21.hidden = true;
    img_22.hidden = true;
    img_23.hidden = true;

    img_31.hidden = true;
    img_32.hidden = true;
    img_33.hidden = true;

    btn_11.style.opacity = 1;
    btn_12.style.opacity = 0.6;
    btn_13.style.opacity = 0.6;
    
    btn_21.style.opacity = 0.6;
    btn_22.style.opacity = 0.6;
    btn_23.style.opacity = 0.6;
    
    btn_31.style.opacity = 0.6;
    btn_32.style.opacity = 0.6;
    btn_33.style.opacity = 0.6;
}

function p12Switch() {
    text.innerHTML = "P1 - Segment 2";
    text2.innerHTML = "Go right from Rainbow Switch to make your way to Kracko";
    img_11.hidden = true;
    img_12.hidden = false;
    img_13.hidden = true;

    img_21.hidden = true;
    img_22.hidden = true;
    img_23.hidden = true;

    img_31.hidden = true;
    img_32.hidden = true;
    img_33.hidden = true;

    btn_11.style.opacity = 0.6;
    btn_12.style.opacity = 1;
    btn_13.style.opacity = 0.6;
    
    btn_21.style.opacity = 0.6;
    btn_22.style.opacity = 0.6;
    btn_23.style.opacity = 0.6;
    
    btn_31.style.opacity = 0.6;
    btn_32.style.opacity = 0.6;
    btn_33.style.opacity = 0.6;
}

function p13Switch() {
    text.innerHTML = "P1 - Segment 3";
    text2.innerHTML = "Go left from Early Bottom Cabbage all the way to Gobbler";
    img_11.hidden = true;
    img_12.hidden = true;
    img_13.hidden = false;

    img_21.hidden = true;
    img_22.hidden = true;
    img_23.hidden = true;

    img_31.hidden = true;
    img_32.hidden = true;
    img_33.hidden = true;

    btn_11.style.opacity = 0.6;
    btn_12.style.opacity = 0.6;
    btn_13.style.opacity = 1;
    
    btn_21.style.opacity = 0.6;
    btn_22.style.opacity = 0.6;
    btn_23.style.opacity = 0.6;
    
    btn_31.style.opacity = 0.6;
    btn_32.style.opacity = 0.6;
    btn_33.style.opacity = 0.6;
}

function p21Switch() {
    text.innerHTML = "P2 - Segment 1";
    text2.innerHTML = "Go ahead in Rainbow Route to grab Missile, then wait for P1";
    img_11.hidden = true;
    img_12.hidden = true;
    img_13.hidden = true;

    img_21.hidden = false;
    img_22.hidden = true;
    img_23.hidden = true;

    img_31.hidden = true;
    img_32.hidden = true;
    img_33.hidden = true;

    btn_11.style.opacity = 0.6;
    btn_12.style.opacity = 0.6;
    btn_13.style.opacity = 0.6;
    
    btn_21.style.opacity = 1;
    btn_22.style.opacity = 0.6;
    btn_23.style.opacity = 0.6;
    
    btn_31.style.opacity = 0.6;
    btn_32.style.opacity = 0.6;
    btn_33.style.opacity = 0.6;
}



function p22Switch() {
    text.innerHTML = "P2 - Segment 2";
    text2.innerHTML = "Once called by P1, go up to Candy Constellation. Then make your way to Master and Crazy Hands";
    img_11.hidden = true;
    img_12.hidden = true;
    img_13.hidden = true;

    img_21.hidden = true;
    img_22.hidden = false;
    img_23.hidden = true;

    img_31.hidden = true;
    img_32.hidden = true;
    img_33.hidden = true;

    btn_11.style.opacity = 0.6;
    btn_12.style.opacity = 0.6;
    btn_13.style.opacity = 0.6;
    
    btn_21.style.opacity = 0.6;
    btn_22.style.opacity = 1;
    btn_23.style.opacity = 0.6;
    
    btn_31.style.opacity = 0.6;
    btn_32.style.opacity = 0.6;
    btn_33.style.opacity = 0.6;
}

function p23Switch() {
    text.innerHTML = "P2 - Segment 3";
    text2.innerHTML = "Get Wheel, then go right from Early Bottom Cabbage down to hit the Early Radish switch. Then make your way to Meta Knight, calling P1 to kill him faster";
    img_11.hidden = true;
    img_12.hidden = true;
    img_13.hidden = true;

    img_21.hidden = true;
    img_22.hidden = true;
    img_23.hidden = false;

    img_31.hidden = true;
    img_32.hidden = true;
    img_33.hidden = true;

    btn_11.style.opacity = 0.6;
    btn_12.style.opacity = 0.6;
    btn_13.style.opacity = 0.6;
    
    btn_21.style.opacity = 0.6;
    btn_22.style.opacity = 0.6;
    btn_23.style.opacity = 1;
    
    btn_31.style.opacity = 0.6;
    btn_32.style.opacity = 0.6;
    btn_33.style.opacity = 0.6;
}

function p31Switch() {
    text.innerHTML = "P3 - Segment 1";
    text2.innerHTML = "Wait for P1 to unlock the Rainbow Route Switch in Moonlight Mansion. Once unlocked, grab Wheel and make your way down to Early Bottom Cabbage Switch, then the Carrot Switches. Then go right from the Deep Carrot switch to defeat Mega Titan";
    img_11.hidden = true;
    img_12.hidden = true;
    img_13.hidden = true;

    img_21.hidden = true;
    img_22.hidden = true;
    img_23.hidden = true;

    img_31.hidden = false;
    img_32.hidden = true;
    img_33.hidden = true;

    btn_11.style.opacity = 0.6;
    btn_12.style.opacity = 0.6;
    btn_13.style.opacity = 0.6;
    
    btn_21.style.opacity = 0.6;
    btn_22.style.opacity = 0.6;
    btn_23.style.opacity = 0.6;
    
    btn_31.style.opacity = 1;
    btn_32.style.opacity = 0.6;
    btn_33.style.opacity = 0.6;
}

function p32Switch() {
    text.innerHTML = "P3 - Segment 2";
    text2.innerHTML = "Go right from Deep Carrot switch to defeat Wiz";
    img_11.hidden = true;
    img_12.hidden = true;
    img_13.hidden = true;

    img_21.hidden = true;
    img_22.hidden = true;
    img_23.hidden = true;

    img_31.hidden = true;
    img_32.hidden = false;
    img_33.hidden = true;

    btn_11.style.opacity = 0.6;
    btn_12.style.opacity = 0.6;
    btn_13.style.opacity = 0.6;
    
    btn_21.style.opacity = 0.6;
    btn_22.style.opacity = 0.6;
    btn_23.style.opacity = 0.6;
    
    btn_31.style.opacity = 0.6;
    btn_32.style.opacity = 1;
    btn_33.style.opacity = 0.6;
}

function p33Switch() {
    text.innerHTML = "P3 - Segment 3";
    text2.innerHTML = "Go right from the Early Radish door and Defeat Moley";
    img_11.hidden = true;
    img_12.hidden = true;
    img_13.hidden = true;

    img_21.hidden = true;
    img_22.hidden = true;
    img_23.hidden = true;

    img_31.hidden = true;
    img_32.hidden = true;
    img_33.hidden = false;

    btn_11.style.opacity = 0.6;
    btn_12.style.opacity = 0.6;
    btn_13.style.opacity = 0.6;
    
    btn_21.style.opacity = 0.6;
    btn_22.style.opacity = 0.6;
    btn_23.style.opacity = 0.6;
    
    btn_31.style.opacity = 0.6;
    btn_32.style.opacity = 0.6;
    btn_33.style.opacity = 1;
}