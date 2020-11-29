var colorpicker = 6;
var colors = [];
var pickedcolor;
var square = document.querySelectorAll(".square");
var display_board = document.querySelector("#main");
var answer_board = document.querySelector("#answer");
var reset = document.querySelector("#reset");
var h1 = document.querySelector("h1");
// var easy = document.querySelector("#easy");
// var hard = document.querySelector("#hard");
var modebtn = document.querySelectorAll(".mode");
///
Init();

function Init() {
    
    for (var i = 0; i < modebtn.length; i++){
        
        modebtn[i].addEventListener("click", function () {
           
            modebtn[0].classList.remove("selected");
            modebtn[1].classList.remove("selected");
            modebtn[1].style.setProperty("--bgcolor", "steelblue");
            modebtn[0].style.setProperty("--bgcolor", "steelblue");
            reset.style.setProperty("--bgcolor", "steelblue");
            this.classList.add("selected");
            
            if (this.textContent === "Easy")
            {
                colorpicker = 3;
            }
            else {
                colorpicker = 6;
            }
        
            reset_f();
            
        });
        
    }
    reset_f();
    
}

// easy.addEventListener("click", function () {
//     answer_board.textContent = "";
//     easy.classList.add("selected");
//     hard.classList.remove("selected");
//     colorpicker = 3;
//     colors = generate_random_colors(colorpicker);
//     pickedcolor = picked_color();
//     display_board.textContent = pickedcolor;
//     for (var i = 0; i < square.length; i++) {
//        if(colors[i]){
//             square[i].style.background = colors[i];
//        }
//         else {
//            square[i].style.background = "none";
//         }
//     }
//     h1.style.background = "steelblue";

// });
// hard.addEventListener("click", function () {
//     answer_board.textContent = "";
//     hard.classList.add("selected");
//     easy.classList.remove("selected");
//     colorpicker = 6;
//     colors = generate_random_colors(colorpicker);
//     pickedcolor = picked_color();
//     display_board.textContent = pickedcolor;
//     for (var i = 0; i < colors.length; i++) {
//         square[i].style.background = colors[i];
//         square[i].style.background = "block";
//     }
//     h1.style.background = "steelblue";

// });



reset.addEventListener("click", reset_f);


function reset_f() {
    answer_board.textContent = "";
    reset.textContent = "new colors";
    colors = generate_random_colors(colorpicker);
    
    pickedcolor = picked_color();
    display_board.textContent = pickedcolor;
    
    modebtn[1].style.setProperty("--bgcolor", "steelblue");
    modebtn[0].style.setProperty("--bgcolor", "steelblue");
    reset.style.setProperty("--bgcolor", "steelblue");

    for (var i = 0; i < square.length; i++) {
        if (colors[i]) {
            square[i].style.display = "block";
            square[i].style.background = colors[i];
           

        }
        else {
            square[i].style.display = "none";
        }
    }
    h1.style.background = "steelblue";
    
}

// display_board.textContent =pickedcolor;
checking_condition();
/////
/////
/////
function checking_condition() {
    for (var i = 0; i < colors.length; i++)
    {
        //square[i].style.background = colors[i];
        //
        square[i].addEventListener("click", function () {
            var clickedcolor = this.style.background;
            if (pickedcolor ===clickedcolor )
            {
                
                change_color_on_right_answer();
            }   
            else {
                answer_board.textContent = "yash gand fat gai kya";
                this.style.background="#232323";
            }
        });
    }
}

////////////////////////////////////////////
function change_color_on_right_answer() {
    answer_board.textContent = "siddhant bosdka ";
    reset.textContent = "Play Again ?";
    h1.style.background = pickedcolor;
    for (var i = 0; i < colors.length; i++)
    { 
        square[i].style.background = pickedcolor;
        
        
    }
    for (var i = 0; i < modebtn.length; i++){
       

        modebtn[i].style.setProperty("--bgcolor", pickedcolor);
        reset.style.setProperty("--bgcolor", pickedcolor);
    }
    
}
function picked_color() {
    var random_value = Math.floor(Math.random() * colors.length);
    return colors[random_value];
}
/////////////
function generate_random_colors(num) {
    var arr = [];
    
    for (var i = 0; i < num; i++){
        // var RGB= random_colors();
        
        // arr[i] = random_colors();
        arr.push(random_colors());//VERY IMPORTANT
        //AGAR PARNTHESIS KE BINA LIKHNEGY TO COPY PASTE HOTA HA OR USKE SATH LIKHNGEY TO PEHELE VO KHUD RUN KARKEY RETURN KAREGA 
    }
    
    return arr;
}
function random_colors() {
    ////////r
    var r =Math.floor(Math.random() * 256);
    ///////////g
    var g = Math.floor(Math.random()* 256);
    /////////////b
    var b = Math.floor(Math.random() * 256);
    
    // var rgb="rgb(" + r + ", " + g + ", " + b + ")";
    // /return rgb;
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
