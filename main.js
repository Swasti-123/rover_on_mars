canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

rover_width=100;
rover_height=90;

mars_images_array = ["Mars_Image1.jpg","Mars_Image2.jpg","Mars_Image3.jpg","Mars_Image4.jpg"];
random_number = Math.floor(Math.random()*4); 
bg_image = mars_images_array[random_number];
rover_image="rover.png";

rover_x=10;
rover_y=10;

function add(){
bg_img= new Image();
bg_img.onload=uploadBg;
bg_img.src=bg_image;

rover_img= new Image();
rover_img.onload=uploadRover;
rover_img.src=rover_image;
}

function uploadBg(){
    ctx.drawImage(bg_img,0,0, canvas.width, canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_img, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e){
    keyPressed= e.keyCode;
    console.log(keyPressed);

    if(keyPressed=="37"){
        left();
        console.log("left");
    }
    if(keyPressed=="38"){
        up();
        console.log("up");
    }
    if(keyPressed=="39"){
        right();
        console.log("right");
    }   

    if(keyPressed=="40"){
        down();
        console.log("down");
    }
}

function left(){
    if(rover_x>=0){
    rover_x=rover_x-10;
    uploadBg();
    uploadRover();
}
}
function right(){
    if(rover_x<=(canvas.width-rover_width)){
    rover_x=rover_x +10;
    uploadBg();
    uploadRover();
}
}
function up(){
    if(rover_y>=0){
    rover_y=rover_y-10;
    uploadBg();
    uploadRover();
}
}
function down(){
    if(rover_y<=(canvas.height-rover_height)){
    rover_y=rover_y+10;
    uploadBg();
    uploadRover();
}
}