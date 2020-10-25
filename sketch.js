//Create variables here
var dog, happyDog;
var database;
var foodS, foodStock;



function preload()
{
  //load images here
  dog=loadImage("images/dogImg.png");
  happyDog=loadImage("images/dogImg1.png");
}

function setup() {
  database=firebase.database
  createCanvas(500, 500);

  dog=createSprite(800,200,150,150);
  dog.addImage(dog);
  dog.scale=0.5;
  textSize(20);
  foodStock=database.ref('Food'); 
  foodStock.on("value",readStock); 

function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}
text("Food Stock");
textSize(25);
  drawSprites();

  textSize(25);
  fill("black");
  stroke("pink");
  text("Food Stock:",+foodS,170,200);
  //add styles here

}

//function to read food Stock
function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){ x=0; }
    else{
       x=x-1; 
      }
 

}

database.ref('/').update({
  Food:x
})

}
