let array = [];


function setup() {
  createCanvas(600, 600);
  background(296, 42, 49);

  strokeWeight(5);

}

function draw() {
  if (mouseIsPressed){
    background(0);
    //stroke(map(mouseX, 0, 600, 0, 255, true))
    //line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    //line(mouseX, mouseY, pmouseX, pmouseY,);
    array.push([mouseX, mouseY]);
  }
}

function keyTyped(){
  console.log(`key ${key} is being typed`)
  console.log(`key ${key} is being typed`)
  if (key === 's'){

//save this image
  saveCanvas('fileName', 'png');
} else if (key === 'd'){
  //display image
  background(296, 42, 49);
  for(let i = 0; i < array.length; i++){
    line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
    console.log(i);
  }


}

  return false;
}
