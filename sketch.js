var dog,sadDog,happyDog,database;

var feedDog,addFood,FedTime
var foodObj,lastfed,foodS,foodStock

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  database= firebase.database()
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

 foodObj = new Food()
 foodStock=database.ref('food')

 foodStock.on("value",readStock)

addFood=createButton(" Add food ")
addFood.position(270,100)
addFood.mousePressed(addFoods)

feedDog=createButton(" Feed the Dog ")
feedDog.position(370,100)
feedDog.mousePressed(feedDogs)

  

}

function draw() {
  background(46,139,87);
  foodObj.display()
  
  fedTime = database.ref('FeddTime')
  fedTime.on("value",function(data){
   lastfed=data.val()
  })
  fill(255,255,255)
  if(lastfed>=12){
    text ("Last Feed: "+lastfed%12+ "PM",350,30 )
  }
  else if(lastfed==0){
    text ("Last Feed: 12 AM" ,350,30 )
  }
  else if(lastfed==0){
    text ("Last Feed:"+lastfeed +"AM",350,30 )
  }
  drawSprites();
}

//function to read food Stock
function readStock(data) {
  foods=data.val()
  foodObj.updateFoodStock(foods)
}

function feedDogs() {
  dog.addImage(happyDog);
  
  if(foodStock.getfoodStock()<=0){
    foodObj.updateFoodStock(foodStock.getfoodStock() * 0)
  }
    else if (foodStock.getfoodStock() <=0){
      foodObj.updateFoodStock(foodStock.getfoodStock()  -1)
    }
   
   // database.ref('/').update({
    // Food: foodObj.getFoodStock(foods)
     //feedTime.hour()
    //})

}

//function to update food stock and last fed time


//function to add food in stock
function addFoods(){
  food++
  database.ref('/').update({
    Food: Foods
   
   })


}